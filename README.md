# ÉcoSport - Site de vente d'équipement sportif recyclable

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

## Fonctionnalités

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
- Contraste de couleurs respecté
- Navigation au clavier

### Impression des CVs

- Feuille de style dédiée (print.css)
- Mise en page optimisée pour l'impression A4
- Masquage des éléments non nécessaires

## Couleurs principales

- **Vert (#2E7D32)** : Représente l'écologie et le développement durable
- **Orange (#FF6B35)** : Représente l'énergie et le dynamisme du sport

## Validation

Le site doit être validé avec le validateur W3C : http://validator.w3.org/

## Technologies utilisées

- HTML5 (structure sémantique)
- CSS3 (avec variables CSS, Grid, Flexbox)
- JavaScript (vanilla, pas de framework)
- SVG pour les images (format adapté et léger)

## Librairies JavaScript

Aucune librairie JavaScript externe n'est utilisée dans ce projet. Toutes les fonctionnalités sont implémentées en JavaScript vanilla.

## Utilisation

1. Ouvrir `src/index.html` dans un navigateur web
2. Le site est entièrement fonctionnel sans serveur
3. Pour tester le mode éco-responsable, cliquer sur le bouton 🌱 dans le header
4. Pour imprimer les CVs, utiliser la fonction d'impression du navigateur (Ctrl+P / Cmd+P)

## Notes importantes

- Les images sont au format SVG (adapté selon les consignes)
- Le mode éco-responsable réduit la consommation d'énergie
- Les CVs sont optimisés pour l'impression avec une mise en page professionnelle
- Le formulaire de contact inclut une validation côté client

## Auteur

Projet réalisé dans le cadre de la SAE DEV 1.2
