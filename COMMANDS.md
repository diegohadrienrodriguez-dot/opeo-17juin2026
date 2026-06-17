# 💻 Commandes Rapides

Référence rapide des commandes à utiliser.

## 🚀 Avant tout - Lire le guide

```bash
# Pour tester localement
cat QUICK_START.md

# Pour publier sur GitHub
cat GITHUB_SETUP.md

# Pour autres options
cat DEPLOYMENT.md
```

## 🏃 Démarrage rapide (local)

### Option 1: Node.js
```bash
cd "/Users/diego/Desktop/opeo-16 juin 2026"
npm install        # Installer les dépendances (une fois)
npm start          # Démarrer le serveur
# Accéder à http://localhost:3030
```

### Option 2: Python (aucune installation requise)
```bash
cd "/Users/diego/Desktop/opeo-16 juin 2026"
python3 -m http.server 8000
# Accéder à http://localhost:8000
```

### Option 3: Python alternative
```bash
cd "/Users/diego/Desktop/opeo-16 juin 2026"
python3 -m http.server 3000
# Accéder à http://localhost:3000
```

## 📤 Publication sur GitHub

### Étape 1: Initialiser Git
```bash
cd "/Users/diego/Desktop/opeo-16 juin 2026"
git init
git config user.name "Votre Nom"
git config user.email "votre-email@opeo.consulting"
```

### Étape 2: Premier commit
```bash
git add .
git commit -m "Initial commit: OPEO website v1.0"
```

### Étape 3: Connecter à GitHub
```bash
# Remplacer opeo-consulting par votre nom d'utilisateur GitHub
git remote add origin https://github.com/opeo-consulting/opeo-site.git
```

### Étape 4: Publier
```bash
git branch -M main
git push -u origin main
```

## 📝 Mise à jour après publication

### Après chaque modification
```bash
cd "/Users/diego/Desktop/opeo-16 juin 2026"
git add .
git commit -m "Description des modifications"
git push origin main
```

## 🔍 Commandes Git utiles

### Voir l'état
```bash
git status                    # Voir les changements
git log --oneline            # Voir l'historique
git diff                     # Voir les différences
```

### Créer une branche
```bash
git checkout -b feature/ma-fonctionnalite
# Faire les modifications...
git add .
git commit -m "Ma fonctionnalité"
git push origin feature/ma-fonctionnalite
# Créer une Pull Request sur GitHub
```

### Récupérer les mises à jour
```bash
git pull origin main         # Récupérer les changements
```

### Annuler des changements
```bash
git restore nom-fichier      # Annuler modifications
git reset HEAD~1             # Annuler dernier commit
git checkout main            # Revenir à main
```

## 🔗 URLs importantes

### Après publication
```
Repository: https://github.com/opeo-consulting/opeo-site
GitHub Pages: https://opeo-consulting.github.io/opeo-site
Domaine personnalisé: https://opeo.consulting (à configurer)
```

## 🛠️ Développement local

### Modifier les fichiers
```bash
# Ouvrir dans votre éditeur préféré
code .                       # VS Code
vim index.html              # Vim
nano styles.css             # Nano
# ou autre éditeur...
```

### Recharger le site
- F5 dans le navigateur (reload)
- Ctrl+Shift+R (hard refresh)
- Cmd+Shift+R (Mac hard refresh)

## 📦 Gestion des dépendances

### Installer dépendances
```bash
npm install
```

### Ajouter une dépendance
```bash
npm install nom-du-package
```

### Mettre à jour
```bash
npm update
```

## 🚪 Arrêter le serveur

```bash
# Appuyer sur Ctrl+C dans le terminal
# ou fermer le terminal
```

## 🆘 Dépannage

### Vérifier que Git est installé
```bash
git --version
```

### Vérifier que Node est installé
```bash
node --version
npm --version
```

### Vérifier que Python est installé
```bash
python3 --version
```

### Erreur: Port déjà utilisé
```bash
# Utiliser un autre port
python3 -m http.server 9000  # au lieu de 8000
npm start                      # Voir server.js pour port
```

### Erreur: Permission denied
```bash
# Donner les permissions
chmod +x server.js
```

### Erreur: Command not found
```bash
# Vérifier que le programme est installé
which git
which python3
which node
```

## 📊 Commandes Git avancées

### Fusionner une branche
```bash
git checkout main
git merge feature/ma-fonctionnalite
git push origin main
```

### Rebase (avancé)
```bash
git rebase main
git push origin feature/ma-fonctionnalite -f
```

### Voir les changements
```bash
git diff main feature/ma-fonctionnalite
git log main..feature/ma-fonctionnalite
```

## 🔑 Variables d'environnement

### Créer un fichier .env local
```bash
# Copier le template
cp .env.example .env

# Éditer avec vos valeurs
nano .env

# Les variables seront disponibles pour vos scripts
```

## 📡 Déploiement alternatif

### Avec Netlify (CLI)
```bash
npm install -g netlify-cli
netlify deploy
```

### Avec Vercel (CLI)
```bash
npm install -g vercel
vercel
```

---

## 📚 Référence rapide

| Action | Commande |
|--------|----------|
| Démarrer (local) | `npm start` ou `python3 -m http.server 8000` |
| Status Git | `git status` |
| Ajouter fichiers | `git add .` |
| Commit | `git commit -m "Message"` |
| Publier | `git push origin main` |
| Récupérer updates | `git pull origin main` |
| Voir historique | `git log --oneline` |
| Nouvelle branche | `git checkout -b nom` |
| Changer de branche | `git checkout main` |
| Arrêter serveur | `Ctrl+C` |

---

**👉 Commencez par:** `cat QUICK_START.md` ou `cat GITHUB_SETUP.md`
