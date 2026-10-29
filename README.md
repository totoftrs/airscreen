# AirScreen — Prototype IFE

Prototype d'interface de divertissement à bord (In-Flight Entertainment), conçu pour simuler l'expérience d'un écran de siège d'avion.

**Démo** : [airscreen-tau.vercel.app](https://airscreen-tau.vercel.app)

---

## Aperçu

AirScreen reproduit une interface IFE complète avec navigation, catalogue de médias, informations de vol en temps réel et services à bord. L'interface est optimisée pour une utilisation tactile en mode paysage sur tablette ou ordinateur.

---

## Pages

| Page | Description |
|------|-------------|
| **Accueil** | Fond d'écran épuré + bannière de vol dépliable avec barre de progression |
| **Médias** | Catalogue de films et séries avec filtres, carousel tendances et vue détail |
| **Musique** | Grille d'albums avec tracklist intégrée |
| **Services** | Menu repas, boissons et informations pratiques (WiFi, bagages...) |

---

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **React Router DOM** — routing avec transitions CSS
- **React Icons**
- **CSS Modules** — styles scopés par composant

---

## Points techniques

- **État dérivé** : filtrage du catalogue sans `useEffect` inutile
- **Transitions entre pages** : pattern `key={location.pathname}` pour rejouer l'animation CSS à chaque navigation
- **CSS Modules + variables CSS** : responsive sur 3 résolutions (1024×768, 800×600, 1366×1024) en orientation paysage
- **TypeScript strict** : types externalisés dans `src/types/`, `import type` systématique
- **Blocage mobile** : composant `BlockedScreen` via media queries CSS uniquement

---

## Structure

```
src/
├── components/     # Layout, TopBar, BottomNavBar, FlightBanner, BlockedScreen
├── pages/          # FlightPage, MediaPage, MediaDetailPage, MusicPage, ServicesPage
├── data/           # JSON statiques (flight, media, music, services)
├── types/          # Interfaces TypeScript métier
└── hooks/          # Prévu pour hooks custom si besoin
```

---

## Résolutions testées

| Résolution | Orientation |
|------------|-------------|
| 1024 × 768 | Paysage (cible principale) |
| 800 × 600  | Paysage |
| 1366 × 1024 | Paysage |
