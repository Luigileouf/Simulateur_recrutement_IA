# LiveKit Vocal Agent - SPIN Selling Simulator

Ce dossier contient l'agent vocal intelligent codé en Python. Il utilise le framework d'agents LiveKit et le plugin officiel de Google pour connecter en temps réel les salons vocaux WebRTC à la Gemini Live API (Speech-to-Speech natif).

---

## 🛠️ Installation Locale

1. **Prérequis :** Assurez-vous d'avoir Python 3.9+ d'installé.
2. **Créer un environnement virtuel :**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Mac / Linux
   # ou venv\Scripts\activate sur Windows
   ```
3. **Installer les dépendances :**
   ```bash
   pip install -r requirements.txt
   ```
4. **Fichier d'environnement :** Copiez le fichier `.env.local` du projet principal dans ce dossier `/agent` sous le nom de `.env` :
   ```env
   LIVEKIT_URL=wss://...
   LIVEKIT_API_KEY=...
   LIVEKIT_API_SECRET=...
   GOOGLE_API_KEY=AQ... (votre clé Gemini API)
   ```

---

## 🚀 Exécution

### En local (Développement)
Pour tester localement, lancez l'agent en mode développement. Il se connectera au serveur LiveKit Cloud et écoutera les nouveaux salons :
```bash
python main.py dev
```

### Déploiement en Production (Sur votre VPS CPU-only)
1. Installez Python et le gestionnaire de processus `pm2` ou créez un service `systemd` sur votre VPS pour garder le script actif.
2. Exécutez le script en mode production :
   ```bash
   python main.py start
   ```
