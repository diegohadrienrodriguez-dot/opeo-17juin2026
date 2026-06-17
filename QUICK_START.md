# ⚡ Démarrage Rapide - Site OPEO

Pour commencer avec le site OPEO en moins de 2 minutes.

## Installation rapide

### Option 1️⃣ : Avec Node.js (recommandé)

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur
npm start

# 3. Ouvrir dans le navigateur
# Le site est accessible à http://localhost:3030
```

### Option 2️⃣ : Avec Python (aucune installation requise)

```bash
# Lancer le serveur Python
python3 -m http.server 8000

# Ouvrir dans le navigateur
# Le site est accessible à http://localhost:8000
```

## 📖 Fichiers importants

| Fichier | Description |
|---------|-------------|
| `index.html` | Page d'accueil |
| `a-propos.html` | Présentation de l'équipe |
| `contact.html` | Formulaire de contact |
| `styles.css` | Styles globaux |
| `main.js` | Scripts JavaScript |
| `assets/images/` | Images du site |

## 🔧 Modifications courantes

### Modifier le texte d'accueil
Ouvrir `index.html` et éditer le contenu

### Ajouter une image
1. Placer l'image dans `assets/images/`
2. Référencer dans le HTML: `<img src="assets/images/mon-image.jpg">`

### Changer les couleurs
Ouvrir `styles.css` et modifier les variables CSS

### Ajouter une page
1. Créer `ma-page.html`
2. Copier la structure d'une autre page
3. Ajouter un lien de navigation

## 📂 Structure des dossiers

```
opeo-site/
├── *.html              # Pages du site
├── styles.css          # Styles
├── main.js             # Scripts
├── assets/
│   └── images/         # Images
└── deploy/             # Déploiement
```

## 🌐 Prochaines étapes

1. **Développement local**: Lancer le serveur et modifier les fichiers
2. **Test**: Vérifier le site dans le navigateur
3. **Déploiement**: Voir `DEPLOYMENT.md` pour publier

## 📚 Documentation complète

- 📄 `README.md` - Documentation complète
- 🚀 `DEPLOYMENT.md` - Guide de déploiement
- 📝 `CHANGELOG.md` - Historique des modifications

## ⌨️ Commandes utiles

```bash
# Installer les dépendances
npm install

# Lancer le serveur
npm start

# Lancer avec Python
python3 -m http.server 8000

# Voir l'état Git
git status

# Commit des modifications
git add .
git commit -m "Description du changement"

# Publier les modifications
git push origin main
```

## ✅ Vérification

Après le démarrage du serveur:
- [ ] Accueil accessible
- [ ] Liens de navigation fonctionnels
- [ ] Images affichées
- [ ] Styles appliqués
- [ ] Pas d'erreurs console (F12)

## 🆘 Problèmes courants

**Port déjà utilisé**
```bash
# Utiliser un autre port
python3 -m http.server 9000
```

**Erreur "command not found"**
```bash
# Vérifier que Node est installé
node --version
npm --version
```

**Changements ne s'affichent pas**
```bash
# Rafraîchir la page
Ctrl+Shift+R (Windows/Linux) ou Cmd+Shift+R (Mac)
```

---

**Besoin d'aide?** Voir `README.md` ou contacter: contact@opeo.consulting
