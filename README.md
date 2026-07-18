# EntretienLab — Maquette UX/UI

Prototype front-end autonome d’un simulateur voice-to-voice pour préparer des entretiens de recrutement.

## Ouvrir la maquette

La maquette n’utilise aucune dépendance externe. Ouvrez directement `index.html` dans un navigateur ou lancez un serveur local depuis ce dossier :

```bash
python3 -m http.server 4174
```

Puis ouvrez `http://localhost:4174`.

## Parcours disponibles

- choix de l’entretien par objectif ;
- scénarios RH, manager, technique, comportemental, final et négociation ;
- création guidée depuis une offre ;
- préparation avec simulation réaliste ou mode coach ;
- test micro simulé et alternative texte ;
- états explicites du tour de parole ;
- transcript facultatif pendant l’entretien ;
- bilan avec critères, preuves et réponse améliorée ;
- transcript complet conservé dans le rapport et son export.

Le microphone, la conversation et l’analyse sont simulés dans cette maquette. Aucun audio n’est capté ou enregistré. Pour une intégration réelle, les clés de fournisseurs d’IA doivent rester côté serveur et ne jamais être placées dans `app.js`.
