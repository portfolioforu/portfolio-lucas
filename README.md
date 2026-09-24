# Portfolio — Lucas Llinares-Cruz

Portfolio réalisé par [Portfolio For U](https://portfolio-for-u.fr).

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) pour les animations au scroll
- [Lucide](https://lucide.dev) pour les icônes

## Lancer le projet en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

Le résultat du build se trouve dans le dossier `dist/` — c'est ce dossier
qu'il faut déposer chez un hébergeur pour mettre le site en ligne.

## Modifier le contenu

Tout le texte (profil, expériences, compétences, projets) se trouve dans
`src/data/content.ts`. Les couleurs et polices se règlent dans `src/index.css`.
