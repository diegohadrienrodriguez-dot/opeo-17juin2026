# 🚀 Guide de publication sur GitHub

Ce dossier est **prêt à être publié** sur GitHub. Voici les étapes pour le faire.

## ✨ Ce qui est déjà configuré

✅ Tous les fichiers du site  
✅ Fichiers de configuration  
✅ Documentation complète  
✅ .gitignore configuré  
✅ package.json prêt  
✅ Licences et mentions légales  

## 📋 Étapes pour publier

### 1️⃣ Créer un repository sur GitHub

1. Aller sur [GitHub.com](https://github.com)
2. Cliquer sur **"New"** (bouton + en haut à droite)
3. Remplir:
   - **Repository name**: `opeo-site`
   - **Description**: Site officiel OPEO Consulting
   - **Public**: Cocher cette option
   - ❌ Ne PAS cocher "Initialize with README" (on l'a déjà)
4. Cliquer **"Create repository"**

### 2️⃣ Initialiser Git localement

```bash
# Naviguer vers le dossier
cd "/Users/diego/Desktop/opeo-16 juin 2026"

# Initialiser le repository Git
git init

# Configurer Git (si pas déjà fait)
git config user.name "Votre Nom"
git config user.email "votre-email@opeo.consulting"

# Ajouter tous les fichiers
git add .

# Faire un premier commit
git commit -m "Initial commit: OPEO website v1.0"
```

### 3️⃣ Connecter à GitHub

GitHub vous donne les commandes à exécuter. Généralement:

```bash
# Ajouter le remote GitHub
git remote add origin https://github.com/opeo-consulting/opeo-site.git

# Changer le nom de la branche (si nécessaire)
git branch -M main

# Publier sur GitHub
git push -u origin main
```

### 4️⃣ Activer GitHub Pages (optionnel)

Pour que le site soit accessible via `github.io`:

1. Aller sur GitHub dans le repository
2. Cliquer sur **Settings** ⚙️
3. Dans le menu latéral, cliquer sur **Pages**
4. Sous "Source", sélectionner:
   - Branch: **main**
   - Dossier: **/ (root)**
5. Cliquer **Save**

**Le site sera accessible à**: `https://opeo-consulting.github.io/opeo-site`

### 5️⃣ Configurer un domaine personnalisé (optionnel)

Si vous avez un domaine `opeo.consulting`:

1. Dans GitHub Pages, entrer le domaine sous "Custom domain"
2. Configurer vos DNS avec votre registrar:
   ```
   Type: CNAME
   Nom: www
   Valeur: opeo-consulting.github.io
   ```
   Ou utiliser les IP GitHub Pages pour apex domains
3. Attendre 24h pour la propagation DNS

## 📁 Structure finale sur GitHub

```
opeo-site/
├── 📄 README.md                 # Documentation
├── 📄 QUICK_START.md           # Démarrage rapide
├── 📄 DEPLOYMENT.md            # Guide de déploiement
├── 📄 GITHUB_SETUP.md          # Ce fichier
├── 📄 CHANGELOG.md             # Historique
├── 📄 CONTRIBUTING.md          # Guide contribution
├── 📄 LICENSE                  # Licence
├── 📄 .gitignore               # Fichiers à ignorer
├── 📄 package.json             # Configuration Node
├── 📄 .env.example             # Variables d'env
├── 🌐 *.html                   # Pages du site
├── 🎨 styles.css               # Styles
├── ⚙️ main.js                   # Scripts
├── 📦 server.js                # Serveur Node
├── 📂 assets/                  # Ressources
│   └── images/                 # Images
└── 📂 deploy/                  # Configuration déploiement
```

## ✅ Checklist avant de publier

- [ ] Vérifier tous les fichiers sont présents
- [ ] Tester le site localement: `npm start` ou `python3 -m http.server 8000`
- [ ] Vérifier qu'aucune donnée sensible n'est exposée
- [ ] Vérifier les images s'affichent correctement
- [ ] Vérifier tous les liens fonctionnent
- [ ] Account GitHub créé et configuré

## 🔐 Considérations de sécurité

Avant de publier, vérifier:

- ✅ Pas de fichiers `.env` avec données sensibles (utiliser `.env.example`)
- ✅ Pas de mots de passe ou clés API
- ✅ Pas de fichiers de sauvegarde (.bak)
- ✅ Fichiers de configuration appropriés

## 🎯 Points importants

### Protéger la branche main
1. Settings > Branches
2. Ajouter une rule pour `main`
3. Cocher "Require pull request reviews"
4. Cocher "Require status checks to pass"

### Collaboration
- Pour ajouter des contributeurs: Settings > Collaborators
- Ajouter les emails des personnes autorisées

### Automatisation
Le repo inclut déjà la structure pour:
- Tests (à ajouter si nécessaire)
- Déploiement automatique (GitHub Actions)
- Linting (à configurer si souhaité)

## 📞 Commandes Git utiles

```bash
# Voir l'historique
git log --oneline

# Créer une nouvelle branche pour les modifications
git checkout -b feature/ma-modification

# Fusionner une branche
git merge feature/ma-modification

# Voir les changements
git diff
git status

# Annuler un changement
git restore nom-fichier
```

## 🚀 Après la publication

### Avertir les utilisateurs
- Annoncer le lancement sur les réseaux sociaux
- Envoyer un email aux contacts
- Ajouter le lien du site partout où c'est pertinent

### Maintenance
- Vérifier régulièrement les issues GitHub
- Répondre aux pull requests
- Mettre à jour le site régulièrement

### Analytics (optionnel)
- Ajouter Google Analytics pour suivre les visites
- Configurer le tracking dans le HTML

## 🆘 Aide supplémentaire

- Documentation GitHub: https://docs.github.com
- Guide Git: https://git-scm.com/doc
- Contact: contact@opeo.consulting

---

**Vous êtes maintenant prêt à publier le site OPEO sur GitHub!** 🎉
