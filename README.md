# 🎙️ Simulateur d'Entretien de Recrutement IA

Ce projet est un simulateur vocal d'entretien de recrutement basé sur **LiveKit WebRTC** et **Gemini 2.5 Realtime**. Il permet à un candidat de s'entraîner à passer un entretien d'embauche de vive voix face à un recruteur virtuel intelligent (IA).

---

## 📁 Structure du Projet

```text
recruitment-simulator/
├── frontend/             # Maquette UX/UI HTML / CSS / JS statique
│   ├── index.html        # Interface utilisateur principale
│   ├── styles.css        # Styles et design premium
│   ├── app.js            # Logique d'interaction et d'appel WebRTC
│   └── README.md         # Guide de la maquette d'origine
├── agent/                # Agent vocal IA (Python)
│   ├── main.py           # Orchestrateur Gemini Realtime & Personas
│   ├── requirements.txt  # Dépendances Python (LiveKit, Google GenAI)
│   └── README.md         # Guide de configuration du worker
├── api/                  # Route d'API pour l'émission de jetons
│   └── get-token.ts      # Générateur de jetons d'accès LiveKit (TypeScript)
├── .env.example          # Modèle de configuration des variables d'environnement
└── README.md             # Ce document de guidage
```

---

## 🛠️ Configuration & Installation

Le simulateur nécessite deux composants actifs pour fonctionner : le **Front-end statique** (avec sa route de jetons) et l'**Agent Vocal (Back-end Python)**.

### 1. Variables d'Environnement
Créez un fichier `.env` à la racine et renseignez vos clés d'accès :
```env
# Clés d'API LiveKit (Générées sur cloud.livekit.io)
LIVEKIT_URL=wss://votre-projet.livekit.cloud
LIVEKIT_API_KEY=dev-votre-cle
LIVEKIT_API_SECRET=votre-secret

# Clé d'API Gemini (Générée sur Google AI Studio)
GEMINI_API_KEY=AQ...
```

---

### 2. Lancement du Front-end (Mockup Statique & API)
Pour exécuter la route `/api/get-token` localement, vous pouvez utiliser Vercel CLI ou un serveur Node.js rapide :

```bash
# Lancer avec Vercel CLI localement pour émuler la fonction serverless
npm install -g vercel
vercel dev
```
Votre interface sera accessible sur `http://localhost:3000`.

---

### 3. Démarrage de l'Agent Vocal Python (VPS ou Local)

L'agent Python se connecte en tant que "worker" sur votre serveur LiveKit pour animer la voix du recruteur en temps réel.

```bash
# 1. Accéder au dossier de l'agent
cd agent

# 2. Créer et activer un environnement virtuel Python
python3 -m venv venv
source venv/bin/activate

# 3. Installer les dépendances requises
pip install -r requirements.txt

# 4. Lancer l'agent en mode développement
python main.py dev
```

*Pour la production sur votre serveur VPS, nous vous recommandons d'utiliser PM2 pour garder l'agent actif :*
```bash
pm2 start venv/bin/python --name "livekit-recruitment-agent" -- main.py dev
```

---

## 🎭 Personnalisation des Personas de Recrutement

Pour modifier le comportement des recruteurs (ex. : un recruteur RH bienveillant, un directeur technique pointilleux, ou un manager stressé), ouvrez le fichier [`agent/main.py`](file:///Users/lmetivier/.gemini/antigravity/scratch/recruitment-simulator/agent/main.py) et éditez le dictionnaire `PROSPECTS` (que vous pouvez renommer en `RECRUITERS`) :

```python
PROSPECTS = {
    'rh_bienveillant': {
        'name': 'Sarah (RH)',
        'role': 'Responsable Recrutement',
        'company': 'OmniCorp',
        'voice': 'Aoede',
        'instruction': """
        Tu es Sarah, responsable du recrutement chez OmniCorp. Tu es accueillante, professionnelle et calme.
        Dès le début de l'appel, tu dis : "Bonjour ! Bienvenue pour cet entretien chez OmniCorp, je vous propose de commencer par vous présenter."
        Pose des questions classiques sur le parcours, la motivation et les soft skills du candidat.
        """
    },
    'directeur_tech': {
        'name': 'Alexandre (CTO)',
        'role': 'Directeur Technique',
        'company': 'OmniCorp',
        'voice': 'Fenrir',
        'instruction': """
        Tu es Alexandre, le CTO d'OmniCorp. Tu es exigeant, direct et axé sur les compétences techniques.
        Tu poses des questions précises sur l'architecture, la gestion de la dette technique et la méthodologie de travail.
        """
    }
}
```

---

## 🔒 Sécurité & Déploiement

*   **Front-end (Vercel) :** Déployez le projet sur Vercel. Renseignez les variables d'environnement (`LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, `LIVEKIT_URL`) directement dans le tableau de bord Vercel pour sécuriser la génération de tokens.
*   **Back-end (VPS) :** Déployez l'agent Python sur votre VPS, configurez PM2 et assurez-vous que les variables d'environnement du fichier `agent/.env` sont bien configurées avec le **même** projet LiveKit.
