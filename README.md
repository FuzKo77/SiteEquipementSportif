# EcoStrive - Site de vente d'équipement sportif recyclable

## Description

Site web éco-responsable pour la vente d'équipement sportif recyclable. Le site respecte les exigences du RGESN (Référentiel Général d'Éco-conception de Services Numériques) et propose un mode éco-responsable pour réduire la consommation d'énergie.

## Structure du projet

```
SAE_DEV1.2/
├── img/              # Images du site (SVG, PNG, JPG)
│   ├── produit1.svg
│   ├── produit2.svg
│   ├── produit3.svg
│   ├── produit4.svg
│   ├── cv-photo1.svg
│   └── cv-photo2.svg
└── src/              # Fichiers sources
    ├── index.html           # Page d'accueil
    ├── contact.html         # Page de contact avec formulaire
    ├── mentions-legales.html # Mentions légales
    ├── plan-du-site.html    # Plan du site
    ├── cv.html              # CVs des créateurs (imprimables)
    ├── style.css            # Feuille de style principale
    ├── eco-mode.css         # Styles pour le mode éco-responsable
    ├── print.css            # Styles pour l'impression des CVs
    └── index.js             # JavaScript pour les fonctionnalités
```

## Pages du site

1. **index.html** - Page d'accueil avec présentation des produits et valeurs
2. **contact.html** - Formulaire de contact avec validation
3. **mentions-legales.html** - Mentions légales complètes
4. **plan-du-site.html** - Plan de navigation du site
5. **cv.html** - CVs des créateurs de l'entreprise (optimisés pour l'impression)
6. **faq.html** - FAQ de questions réccurentes

### Mode éco-responsable (RGESN)

- Bouton d'activation/désactivation du mode éco-responsable
- Réduction des animations et transitions
- Simplification des effets visuels
- Sauvegarde de la préférence dans le localStorage

### Responsive Design

- Adaptation pour ordinateur de bureau
- Adaptation pour téléphone portable (mode portrait)
- Utilisation de media queries et container queries
- Menu hamburger pour mobile

### Accessibilité

- Attributs ARIA pour l'accessibilité
- Structure sémantique HTML5
- Contraste de couleurs 
- Navigation au clavier

### Impression des CVs

- Feuille de style dédiée (print.css)
- Mise en page optimisée pour l'impression A4
- Masquage des éléments non nécessaires

## Couleurs principales

- **Vert (#2E7D32)** : Représente l'écologie et le développement durable
- **Bleu (#0057B8)** : Représente l'énergie et le dynamisme du sport

## Technologies utilisées

- HTML5 (structure sémantique)
- CSS3 (avec variables CSS, Grid, Flexbox)
- JavaScript (vanilla, pas de framework)
- SVG, PNG et JPEG pour les images

## Librairies JavaScript

Aucune librairie JavaScript externe n'est utilisée dans ce projet. Toutes les fonctionnalités sont implémentées en JavaScript vanilla.

## Utilisation

1. Ouvrir `https://dwarves.iut-fbleau.fr/~gobe/SAE_DEV1.2/src/` dans un navigateur web
2. Le site est entièrement fonctionnel sans serveur
3. Pour tester le mode éco-responsable, cliquer sur le bouton 🌱 dans le header
4. Pour imprimer les CVs, utiliser la fonction d'impression du navigateur (Ctrl+P / Cmd+P)

## Notes importantes

- Les images sont au format SVG, PNG et JPEG
- Le mode éco-responsable réduit la consommation d'énergie
- Les CVs sont optimisés pour l'impression avec une mise en page professionnelle
- Le formulaire de contact inclut une validation côté client

## Auteur

Théo Gobé, William-James Tafok et Devrim Aktas
Projet réalisé dans le cadre de la SAE DEV 1.2
