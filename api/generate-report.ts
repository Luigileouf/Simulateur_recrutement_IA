import { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: any, res: any) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { transcript, scenario } = req.body || {};

  if (!transcript || !Array.isArray(transcript) || transcript.length === 0) {
    return res.status(400).json({ error: 'Transcript is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server' });
  }

  // Build the prompt for Gemini
  const prompt = `
Tu es un coach en recrutement expert et un recruteur senior.
Analyse la transcription de l'entretien de recrutement ci-dessous entre le recruteur (ou prospect) et le candidat (l'utilisateur).
Génère un bilan d'évaluation personnalisé sous forme de JSON structuré.

Voici le contexte du scénario d'entretien :
- Recruteur : ${scenario?.person || 'Recruteur'} (${scenario?.role || 'RH/Manager'})
- Titre : ${scenario?.title || 'Entretien'}
- Objectif/Contexte : ${scenario?.objective || ''} ${scenario?.context || ''}

Voici le transcript complet de la simulation :
${transcript.map(t => `${t.speaker}: "${t.message}"`).join('\n')}

Renvoie uniquement un objet JSON qui respecte SCRUPULEUSEMENT la structure suivante :
{
  "score": (un entier entre 30 et 100 qui évalue globalement la performance du candidat),
  "readinessLabel": "Prêt à convaincre" (si score < 82) ou "Très bien préparé" (si score >= 82),
  "reportTitle": "Un résumé percutant de 3 à 6 mots en français de la performance",
  "reportSubtitle": "Un paragraphe d'analyse globale de 2 phrases mettant en avant les points forts et axes clés d'amélioration de la prestation globale.",
  "pointFortTitle": "Titre court du point fort principal (ex: 'Parcours cohérent')",
  "pointFortDesc": "Explication personnalisée en 1 phrase de pourquoi c'était un point fort dans leurs réponses.",
  "progresTitle": "Titre court du principal axe de progrès (ex: 'Quantifier vos réalisations')",
  "progresDesc": "Conseil en 1 phrase sur comment s'améliorer par rapport à leurs réponses.",
  "exerciceTitle": "Titre de l'exercice recommandé (ex: 'La méthode STAR')",
  "exerciceDesc": "Court conseil d'action immédiate pour s'exercer.",
  "criteria": [
    {
      "name": "Clarté et concision",
      "score": (entier entre 30 et 100),
      "comment": "Observation personnalisée et constructive basée sur son niveau de clarté dans ses réponses."
    },
    {
      "name": "Pertinence pour le poste",
      "score": (entier entre 30 et 100),
      "comment": "Observation sur l'adéquation de ses exemples avec le poste et l'entreprise."
    },
    {
      "name": "Qualité des exemples",
      "score": (entier entre 30 et 100),
      "comment": "Analyse de la structure de ses exemples (situations, actions, résultats)."
    },
    {
      "name": "Motivation",
      "score": (entier entre 30 et 100),
      "comment": "Évaluation de l'intérêt marqué pour le poste et l'entreprise."
    },
    {
      "name": "Expression orale",
      "score": (entier entre 30 et 100),
      "comment": "Observation sur la fluidité, le rythme et le ton (déduit du style des textes transcris)."
    }
  ],
  "reworkQuestion": "La question précise de la simulation sur laquelle le candidat a été le moins performant ou qu'il doit approfondir",
  "reworkYourAnswer": "Une reformulation ou citation résumée de la réponse réelle qu'a donnée le candidat dans la simulation",
  "reworkShortcomings": "Une description claire de ce qui manquait dans sa réponse (ex: manque de données chiffrées, rôle flou...)",
  "reworkImprovedAnswer": "Une excellente alternative rédigée (à la première personne) que le candidat aurait pu prononcer pour être très convaincant, en utilisant la méthode STAR (Situation, Tâche, Action, Résultat) adaptée au scénario"
}

Veille à ce que le JSON soit valide, sans caractères d'échappement invalides, et rédigé dans un français impeccable, professionnel et encourageant.
`;

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API returned status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!generatedText) {
      throw new Error('Gemini API returned empty response');
    }

    const reportData = JSON.parse(generatedText.trim());
    return res.status(200).json(reportData);
  } catch (err: any) {
    console.error('Error generating report:', err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
