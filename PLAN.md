# Plan de travail — AirScreen (2 semaines)

## Ce qui est terminé ✅

- Structure du projet (dossiers, routing, layout)
- JSON data + types TypeScript (flight, media, music, services)
- TopBar + BottomNavBar avec CSS Modules et variables responsive
- FlightPage — fond d'écran + FlightBanner (toggle infos vol)
- MediaPage — sidebar filtres + carousel + grille + composant Card
- CSS global (variables, reset, responsive 3 résolutions, orientation paysage)

---

## Semaine 1 — Compléter les pages principales

### Jour 1-2 — MediaPage : détail d'un média
- [ ] Créer une page ou modal `MediaDetail` au clic sur une card
- [ ] Afficher : titre, année, catégorie, rating, miniature large
- [ ] Route `/media/:title` ou modal avec useState
- [ ] CSS de la vue détail

### Jour 3-4 — ServicesPage
- [ ] Structure : 3 onglets (Repas / Boissons / Infos pratiques)
- [ ] Logique de filtrage par onglet (useState)
- [ ] Affichage des repas avec catégorie (Entrée / Plat / Dessert)
- [ ] Affichage des boissons avec options
- [ ] Affichage des infos pratiques (icône + titre + description)
- [ ] CSS de la page

### Jour 5-6 — FlightPage : polish
- [ ] Barre de progression du vol (champ `progress` dans flight.json)
- [ ] Affichage vitesse + altitude en temps "simulé" (optionnel)
- [ ] CSS final de la FlightBanner

### Jour 7 — Tests responsive
- [ ] Vérifier l'ensemble à 1024×768 (cible principale)
- [ ] Vérifier à 800×600 (variables CSS à ajuster si besoin)
- [ ] Vérifier à 1366×1024

---

## Semaine 2 — MusicPage, polish global et portfolio

### Jour 8-9 — MusicPage
- [ ] Grille d'albums (composant `AlbumCard`)
- [ ] Vue détail d'un album avec sa tracklist
- [ ] Mini player (titre en cours + contrôles basiques) — optionnel

### Jour 10-11 — HUD overlay média
- [ ] Overlay "temps restant" centré en haut pendant la lecture
- [ ] Apparaît au toucher/clic, disparaît après 3 secondes (useEffect + useState)
- [ ] Animation fade-in / fade-out

### Jour 12-13 — Transitions et polish global
- [ ] Transitions entre les pages (CSS ou framer-motion)
- [ ] Vérification de la cohérence visuelle sur toutes les pages
- [ ] Suppression des console.log restants
- [ ] Vérification TypeScript (npx tsc --noEmit)

### Jour 14 — Préparation portfolio
- [ ] Mettre à jour le README avec screenshots et description
- [ ] Déploiement (Vercel ou Netlify)
- [ ] Préparer 2-3 points à expliquer en entretien (choix archi, hooks utilisés, problèmes résolus)

---

## Priorités en cas de manque de temps

Si tu manques de temps, voici l'ordre de sacrifice :

1. HUD overlay média (feature bonus)
2. Mini player MusicPage (feature bonus)
3. Transitions entre pages (polish)
4. MusicPage complète (à montrer "en cours" sur le portfolio)

## Points forts à valoriser en entretien

- Architecture composants / séparation des responsabilités
- CSS Modules + variables CSS responsive
- Logique de filtrage avec état dérivé (pas de useEffect inutile)
- TypeScript strict (`Pick`, `import type`, interfaces métier)
- Pattern carousel et gestion d'état toggle
