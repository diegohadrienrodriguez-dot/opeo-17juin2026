# Guide de déploiement - Site OPEO

Ce document explique comment déployer le site OPEO sur différentes plateformes.

## 📋 Prérequis

- Git installé et configuré
- Accès au repository GitHub
- Domaine configuré (optionnel)

## 🚀 Déploiement sur GitHub Pages

### Étape 1: Configuration du repository

1. Créer un repository public nommé `opeo-site`
2. Cloner le repository localement
3. Copier tous les fichiers du dossier dans le repository
4. Commit et push initial

```bash
git clone https://github.com/opeo-consulting/opeo-site.git
# Copier les fichiers
git add .
git commit -m "Initial commit: OPEO website"
git push origin main
```

### Étape 2: Activer GitHub Pages

1. Aller dans Settings du repository
2. Sélectionner "Pages" dans le menu latéral
3. Choisir "Deploy from a branch" sous Source
4. Sélectionner branche `main` et dossier `/ (root)`
5. Cliquer "Save"

**Le site sera accessible à**: `https://opeo-consulting.github.io/opeo-site`

### Étape 3: Configurer un domaine personnalisé (optionnel)

1. Aller dans Settings > Pages
2. Entrer le domaine personnalisé (ex: opeo.consulting)
3. Configurer les DNS de votre domaine:
   - Type: CNAME
   - Nom: www
   - Valeur: opeo-consulting.github.io
4. Ou utiliser les IP GitHub Pages pour les apex domains

## 🖥️ Déploiement sur un serveur web traditionnel

### Avec FTP/SFTP

1. Connecter au serveur via FTP
2. Uploader tous les fichiers dans le dossier public_html ou www
3. Mettre les permissions appropriées (755 pour dossiers, 644 pour fichiers)

### Avec SCP

```bash
scp -r * user@server.com:/var/www/opeo-site/
```

### Avec Git sur le serveur

```bash
ssh user@server.com
cd /var/www
git clone https://github.com/opeo-consulting/opeo-site.git
```

## ☁️ Déploiement sur Netlify

1. Se connecter à Netlify
2. Cliquer "New site from Git"
3. Connecter le repository GitHub
4. Paramètres de déploiement:
   - Build command: (laisser vide)
   - Publish directory: /
5. Cliquer "Deploy site"

## ☁️ Déploiement sur Vercel

1. Se connecter à Vercel
2. Cliquer "New Project"
3. Importer le repository GitHub
4. Paramètres:
   - Framework: Autres
   - Publish directory: /
5. Cliquer "Deploy"

## 🐳 Déploiement avec Docker

Créer un `Dockerfile`:

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3030
CMD ["npm", "start"]
```

Construire et déployer:

```bash
docker build -t opeo-site .
docker run -p 3030:3030 opeo-site
```

## 📝 Mise à jour du site

### Pour GitHub Pages

```bash
# Faire les modifications
git add .
git commit -m "Description des changements"
git push origin main
# Le site se met à jour automatiquement
```

### Pour un serveur traditionnel

```bash
# Via FTP/SFTP: uploader les fichiers modifiés
# Via Git: 
cd /var/www/opeo-site
git pull
```

## 🔒 Considérations de sécurité

- [ ] Vérifier qu'aucune donnée sensible n'est exposée
- [ ] Utiliser HTTPS (fourni par GitHub Pages et la plupart des hosts)
- [ ] Garder les dépendances à jour
- [ ] Activer les protections de branche sur main
- [ ] Examiner les changements avant de merger

## ✅ Vérification post-déploiement

1. Vérifier que le site est accessible
2. Tester tous les liens de navigation
3. Vérifier les images et ressources
4. Tester sur mobile
5. Vérifier les formulaires (si existants)
6. Vérifier les performances

## 📊 Monitoring

- **GitHub Pages**: Dashboard GitHub Pages dans Settings
- **Netlify**: Dashboard Netlify
- **Serveur personnel**: Logs d'accès serveur

## 🆘 Dépannage

**Le site n'apparaît pas après 10 min**
- Vérifier que GitHub Pages est activé
- Vérifier le commit est bien pushé
- Voir l'onglet "Actions" pour les erreurs de build

**Les images ne s'affichent pas**
- Vérifier les chemins des images
- Vérifier les permissions des fichiers

**Les styles ne s'appliquent pas**
- Vider le cache du navigateur
- Vérifier le chemin du CSS

---

Pour toute question sur le déploiement: contact@opeo.consulting
