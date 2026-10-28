1 - Navbar principale : Accueil · Mon vol · Vidéos · Musique · Services à bord 


2 - Poser les fondations
React, TypeScript, routing, layout et navbar responsive.
Priorité haute

Construire le catalogue vidéo
Types TypeScript, données fictives, cartes réutilisables et grille de films.

3 - Pour ne pas te disperser, je commencerais avec :
- Une navbar fonctionnelle.
- Une page d'accueil avec quelques informations sur le vol (faire de la page d'accueil la page "mon vol" avec un fond d'écran épuré et une modal depliable avec des infos du vol).
- Un catalogue de films avec recherche et filtres.
- Une fiche détaillée de film.
- Des données fictives typées en TypeScript.
- Un design adapté à un écran tactile d'avion.
Une fois cette base solide, tu pourras ajouter les séries, les documentaires, la musique et les services.
Le premier objectif concret : créer MainLayout.tsx, Navbar.tsx, VideosPage.tsx, MediaCard.tsx et un type Media en TypeScript. Cela te donnera une architecture fonctionnelle sans surconcevoir le projet avant d'avoir développé la première page.

4 - Pour AirScreen, je testerais principalement 1024 × 768 px, puis 800 × 600 px et 1366 × 1024 px, toujours en orientation paysage.

5 - Idée de structure : 

src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── layout/
│       ├── MainLayout.tsx
│       ├── Navbar.tsx
│       └── PageContainer.tsx
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   └── Loader.tsx
│   ├── media/
│   │   ├── MediaCard.tsx
│   │   ├── MediaRow.tsx
│   │   ├── MediaGrid.tsx
│   │   ├── MediaDetails.tsx
│   │   └── MediaFilters.tsx
│   └── common/
│       ├── SearchBar.tsx
│       └── SectionTitle.tsx
│
├── features/
│   ├── home/
│   │   └── HomePage.tsx
│   ├── flight/
│   │   └── FlightPage.tsx
│   ├── videos/
│   │   ├── VideosPage.tsx
│   │   ├── MoviesPage.tsx
│   │   ├── SeriesPage.tsx
│   │   ├── DocumentariesPage.tsx
│   │   └── MediaDetailsPage.tsx
│   ├── music/
│   │   └── MusicPage.tsx
│   ├── services/
│   │   └── ServicesPage.tsx
│   └── search/
│       └── SearchPage.tsx
│
├── data/
│   ├── media.ts
│   ├── playlists.ts
│   └── flight.ts
│
├── types/
│   ├── media.ts
│   ├── flight.ts
│   └── music.ts
│
├── hooks/
│   └── useMedia.ts
│
├── assets/
│   └── images/
│
└── main.tsx

## Note technique — chemins des images (à traiter)

Les chemins dans `media.json` utilisent des chemins relatifs (`./assets/thumbnails/...`)
qui ne fonctionnent pas directement avec Vite lors de l'import JSON.

**Solution à implémenter** : déplacer les images dans `public/assets/thumbnails/`
et mettre à jour les chemins en `/assets/thumbnails/...` (chemin absolu),
ou importer les images statiquement via Vite.
