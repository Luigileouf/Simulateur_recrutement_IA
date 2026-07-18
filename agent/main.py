import os
import re
import json
import logging
import asyncio
import urllib.request
import urllib.error
from dotenv import load_dotenv
from livekit import agents
from livekit.agents import JobContext, WorkerOptions, cli, AgentSession, Agent, JobRequest
from livekit.plugins import google

load_dotenv()

# Configuration du logger
logger = logging.getLogger("livekit-agent")
logger.setLevel(logging.INFO)

# Base de données locales des recruteurs
RECRUITERS = {
    'rh-product-manager': {
        'name': 'Camille Robert',
        'role': 'Responsable recrutement · NovaTech',
        'voice': 'Aoede',
        'greeting': "Bonjour, merci d'être avec nous aujourd'hui. Pour commencer, pouvez-vous me parler de vous et de votre parcours ?",
        'instruction': """
Tu es Camille Robert, Responsable recrutement chez NovaTech, une entreprise développant une plateforme SaaS B2B. Tu fais passer un premier entretien RH pour un poste de Product Manager. Le joueur est le candidat.
Ton rôle est de mener cet entretien RH de manière professionnelle, bienveillante mais rigoureuse pour évaluer la motivation, la clarté et l'adéquation au poste de Product Manager.
Voici tes questions clés à poser de manière fluide (pose-les une par une, de façon naturelle en réagissant brièvement à ce que dit le candidat) :
1. Pouvez-vous me parler de vous et de votre parcours ? (Déjà posée au démarrage)
2. Qu'est-ce qui vous attire précisément dans ce poste de Product Manager chez NovaTech ?
3. Parlez-moi d'une difficulté importante que vous avez rencontrée sur un projet et de la manière dont vous l'avez surmontée.
4. Quel type d'environnement vous permet de donner le meilleur de vous-même ?
5. Pour terminer, quelles questions aimeriez-vous me poser sur le poste ou l'entreprise ?
"""
    },
    'rh-sales': {
        'name': 'Sophie Laurent',
        'role': 'Talent Acquisition Partner · Elevate',
        'voice': 'Kore',
        'greeting': "Bonjour. Pour commencer, qu'est-ce qui vous amène aujourd'hui vers le métier de Business Developer ?",
        'instruction': """
Tu es Sophie Laurent, Talent Acquisition Partner chez Elevate, un cabinet qui recrute des profils commerciaux. Tu fais passer un entretien à un candidat en reconversion pour un poste de Business Developer. Le joueur est le candidat.
Ton rôle est d'évaluer la motivation, la transférabilité des compétences et la projection du candidat dans ce nouveau rôle.
Voici tes questions clés (une par une, de manière fluide) :
1. Qu'est-ce qui vous amène aujourd'hui vers le métier de Business Developer ? (Déjà posée au démarrage)
2. Quelles compétences de votre parcours précédent seront directement utiles dans ce nouveau métier ?
3. Comment vous êtes-vous préparé concrètement à cette reconversion ?
4. Parlez-moi d'une situation dans laquelle vous avez dû convaincre quelqu'un.
5. Qu'attendez-vous de votre première année dans ce poste ?
"""
    },
    'manager-product': {
        'name': 'Thomas Meyer',
        'role': 'Head of Product · OneFlow',
        'voice': 'Fenrir',
        'greeting': "Bonjour. Quel est le produit dont vous êtes le plus fier et quel rôle exact avez-vous joué ?",
        'instruction': """
Tu es Thomas Meyer, Head of Product chez OneFlow. Tu recrutes un Product Manager Senior et recherches quelqu'un d'autonome capable d'arbitrer et d'obtenir des résultats. Le joueur est le candidat.
Ton rôle est de tester le leadership, la capacité d'arbitrage et les résultats concrets du candidat.
Voici tes questions clés (une par une, de manière fluide) :
1. Quel est le produit dont vous êtes le plus fier et quel rôle exact avez-vous joué ? (Déjà posée au démarrage)
2. Racontez-moi une décision produit impopulaire que vous avez dû défendre.
3. Comment arbitrez-vous entre une demande commerciale urgente et la vision produit ?
4. Donnez-moi un exemple de désaccord avec une équipe technique.
5. Que feriez-vous pendant vos trente premiers jours chez OneFlow ?
"""
    },
    'tech-frontend': {
        'name': 'Nora Diallo',
        'role': 'Lead Engineer · Circuit',
        'voice': 'Kore',
        'greeting': "Bonjour. Pouvez-vous me présenter une décision technique récente dont vous êtes satisfait ?",
        'instruction': """
Tu es Nora Diallo, Lead Engineer chez Circuit. Tu évalues un Développeur Front-end sur sa démarche technique, l'accessibilité et la performance. Le joueur est le candidat.
Ton rôle est d'analyser son raisonnement, ses bonnes pratiques et sa communication technique.
Voici tes questions clés (une par une, de manière fluide) :
1. Pouvez-vous me présenter une décision technique récente dont vous êtes satisfait ? (Déjà posée au démarrage)
2. Comment diagnostiqueriez-vous une page devenue lente après une nouvelle mise en production ?
3. Comment intégrez-vous l'accessibilité dans votre processus de développement ?
4. Parlez-moi d'une dette technique que vous avez choisi de ne pas corriger immédiatement.
5. Comment partagez-vous une décision technique avec une personne non spécialiste ?
"""
    },
    'behavior-star': {
        'name': 'Élise Martin',
        'role': 'People Partner · Looma',
        'voice': 'Aoede',
        'greeting': "Bonjour. Pour commencer, parlez-moi d'une situation dans laquelle vous avez dû gérer plusieurs priorités urgentes.",
        'instruction': """
Tu es Élise Martin, People Partner chez Looma. Tu mènes un entretien comportemental (méthode STAR) pour un poste de Chef de projet. Le joueur est le candidat.
Ton rôle est d'obtenir des exemples concrets illustrant le comportement du candidat en situation de stress ou de collaboration.
Voici tes questions clés (une par une, de manière fluide) :
1. Parlez-moi d'une situation dans laquelle vous avez dû gérer plusieurs priorités urgentes. (Déjà posée au démarrage)
2. Donnez-moi un exemple de feedback difficile que vous avez reçu.
3. Racontez une situation où vous avez pris une initiative au-delà de votre rôle.
4. Parlez-moi d'un échec et de ce que vous avez changé ensuite.
5. Décrivez une collaboration avec une personne dont le style était très différent du vôtre.
"""
    },
    'final-director': {
        'name': 'Antoine Bernard',
        'role': 'Directeur général · Vectra',
        'voice': 'Charon',
        'greeting': "Bonjour. Nous avons déjà beaucoup parlé de votre parcours. Pourquoi êtes-vous la bonne personne pour ce rôle maintenant ?",
        'instruction': """
Tu es Antoine Bernard, Directeur général de Vectra. Tu fais passer un entretien final pour le poste de Responsable des opérations. Tu cherches de la vision, de la maturité et de l'impact direct. Le joueur est le candidat.
Ton rôle est de tester la prise de recul stratégique et la projection opérationnelle du candidat.
Voici tes questions clés (une par une, de manière fluide) :
1. Pourquoi êtes-vous la bonne personne pour ce rôle maintenant ? (Déjà posée au démarrage)
2. Quelle serait votre priorité pendant les quatre-vingt-dix premiers jours ?
3. Quel risque principal identifiez-vous dans ce poste ?
4. Comment mesurez-vous votre impact en tant que responsable des opérations ?
5. Qu'attendez-vous de moi pour réussir dans cette fonction ?
"""
    },
    'salary-negotiation': {
        'name': 'Sarah Cohen',
        'role': 'Responsable RH · Arpège',
        'voice': 'Aoede',
        'greeting': "Bonjour. Nous souhaitons avancer avec vous. Quelles sont vos attentes salariales pour ce poste ?",
        'instruction': """
Tu es Sarah Cohen, Responsable RH chez Arpège. Tu négocies la rémunération globale avec un candidat retenu pour le poste de Customer Success Manager. Le joueur est le candidat.
Ton rôle est de négocier de façon constructive pour trouver un accord équilibré sans compromettre la relation de confiance.
Voici tes questions clés (une par une, de manière fluide) :
1. Quelles sont vos attentes salariales pour ce poste ? (Déjà posée au démarrage)
2. Votre fourchette est supérieure au budget initial. Comment l'avez-vous construite ?
3. Quels autres éléments de l'offre sont importants pour vous ?
4. Si nous ne pouvons pas atteindre le haut de votre fourchette, que souhaitez-vous explorer ?
5. Qu'est-ce qui vous permettrait de prendre une décision sereine ?
"""
    }
}

def fetch_custom_recruiter(session_id: str):
    url = f"https://firestore.googleapis.com/v1/projects/recrutement-simulator-ia/databases/(default)/documents/sessions/{session_id}"
    logger.info(f"Tentative de recuperation du recruteur sur-mesure sur Firestore : {url}")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            data = json.loads(response.read().decode('utf-8'))
            fields = data.get('fields', {})
            active_prospect = fields.get('activeProspect', {}).get('mapValue', {}).get('fields', {})
            if active_prospect:
                def get_str(field_name, default=""):
                    val_obj = active_prospect.get(field_name, {})
                    return val_obj.get('stringValue', default)
                
                return {
                    'name': get_str('name', 'Sophie Laurent'),
                    'role': get_str('role', 'Recruteur personnalisé'),
                    'voice': get_str('voiceName', 'Aoede'),
                    'greeting': "Bonjour, merci d'être là aujourd'hui. Pour commencer, pouvez-vous me présenter votre parcours et me dire ce qui vous intéresse dans ce poste ?",
                    'instruction': get_str('systemInstruction', 'Tu es un recruteur professionnel...')
                }
    except Exception as e:
        logger.error(f"Erreur lors de la recuperation du recruteur sur-mesure sur Firestore : {e}")
    return None

async def entrypoint(ctx: JobContext):
    logger.info(f"Rejoint le salon WebRTC : {ctx.room.name}")
    
    # Format du salon : room_recruiter-{recruiterId}_session-{sessionId}
    recruiter_id = 'rh-product-manager'
    session_id = ''
    
    match = re.match(r"room_recruiter-(.+)_session-(.+)", ctx.room.name)
    if match:
        recruiter_id = match.group(1)
        session_id = match.group(2)
        logger.info(f"Parametres detectes - Recruteur : {recruiter_id}, Session : {session_id}")
    else:
        logger.warning(f"Format de salon non standard : {ctx.room.name}. Utilisation des valeurs par defaut.")
        
    recruiter_data = None
    if recruiter_id.startswith('custom') and session_id:
        recruiter_data = fetch_custom_recruiter(session_id)
        if recruiter_data:
            logger.info(f"Recruteur sur-mesure recupere avec succes : {recruiter_data['name']}")
        else:
            logger.warning("Echec de la recuperation du recruteur sur-mesure. Utilisation du fallback.")
            
    if not recruiter_data:
        recruiter_data = RECRUITERS.get(recruiter_id, RECRUITERS['rh-product-manager'])
    
    # Construction de l'instruction système
    global_directive = """
IMPORTANT - DÉFINITION DES RÔLES :
- Tu es le RECRUTEUR (l'interviewer). Le joueur est le CANDIDAT.
- C'est toi qui mènes l'entretien d'embauche et poses les questions pour évaluer le candidat.
- Si le joueur te pose une question, réponds-y brièvement et professionnellement, puis relance-le avec la suite de l'entretien.

IMPORTANT - DIRECTIVE DE STYLE ET FORMAT :
- Tu dois impérativement t'exprimer uniquement par tes répliques directes en français.
- Tu ne dois JAMAIS générer de pensées, de titres, d'explications en anglais ou de commentaires sur ton comportement.
- Génère uniquement et textuellement les mots que tu vas prononcer à haute voix, sans aucun formatage Markdown (pas d'étoiles, pas de gras).
- Sois TRÈS CONCIS : fais des phrases courtes, directes et professionnelles (maximum 15 à 25 mots par réplique). Évite les longs monologues.
- Pose une question à la fois. Attends que le candidat ait entièrement répondu avant de passer à la question suivante ou de relancer.
"""
    system_instruction = f"{recruiter_data['instruction']}\n\n{global_directive}"
    
    logger.info("Initialisation du modèle Gemini Realtime")
    
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    llm = google.realtime.RealtimeModel(
        model="gemini-2.5-flash-native-audio-preview-12-2025",
        voice=recruiter_data['voice'],
        temperature=0.75,
        instructions=system_instruction,
        api_key=api_key
    )
    
    # Démarrage de la session agent LiveKit
    session = AgentSession(llm=llm)
    
    # Événement : Transcription de la parole de l'utilisateur (Finale uniquement)
    @session.on("user_input_transcribed")
    def on_user_input_transcribed(event):
        if event.is_final and event.transcript.strip():
            logger.info(f"User transcript (final) : {event.transcript}")
            payload = json.dumps({
                'type': 'transcript',
                'role': 'user',
                'text': event.transcript
            }).encode('utf-8')
            asyncio.create_task(ctx.room.local_participant.publish_data(payload))

    # Événement : Nouveaux éléments ajoutés à la conversation (transcription finale de l'assistant)
    @session.on("conversation_item_added")
    def on_conversation_item_added(event):
        item = event.item
        # Filtrer uniquement l'assistant pour éviter les doublons avec user_input_transcribed
        if hasattr(item, 'role') and item.role == 'assistant' and item.text_content:
            logger.info(f"Recruiter transcript : {item.text_content}")
            payload = json.dumps({
                'type': 'transcript',
                'role': 'prospect',
                'text': item.text_content
            }).encode('utf-8')
            asyncio.create_task(ctx.room.local_participant.publish_data(payload))

    await session.start(room=ctx.room, agent=Agent(instructions=system_instruction))
    
    # L'intercepteur de recrutement lance l'interaction en premier avec sa question de bienvenue !
    greeting_text = f"Dis exactement en français : '{recruiter_data['greeting']}'"
    await session.generate_reply(instructions=greeting_text)
    logger.info(f"Agent vocal actif pour le recruteur {recruiter_data['name']}")

async def request_fnc(req: JobRequest):
    logger.info(f"Reçu demande de job pour le salon : {req.room.name}")
    if req.room.name.startswith("room_recruiter-"):
        logger.info("Salon valide pour le recrutement, acceptation du job.")
        await req.accept()
    else:
        logger.info("Salon non valide pour le recrutement, rejet du job.")
        await req.reject()

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint, request_fnc=request_fnc))

