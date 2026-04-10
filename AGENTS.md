# AGENTS.md - AsecWebApp

## Dev Commands
- `npm start` - Start Angular dev server (http://localhost:4200)
- `npm run build` - Production build to `dist/`
- `npm run watch` - Dev build with watch mode
- `npm test` - Run Karma unit tests
- `cd functions && npm run build` - Build Firebase Cloud Functions

## Deploy
- `ng deploy` - Deploys to Firebase Hosting (configured for `asec-web-app` project)

## Tech Stack
- Angular 15 with SCSS
- Firebase (Hosting + Cloud Functions)
- Tailwind CSS with custom config (darkMode: 'class', primary: #3F00FF)
- anime.js for animations
- Karma for testing

## Structure
- Frontend: `src/app/main/*` (pages), `src/app/shared/*` (navbar, footer, sidebar)
- Backend: `functions/` (Firebase Cloud Functions, Node 8)

## Testing
- Run single spec: `ng test --include="**/filename.spec.ts"`
- Tests use Karma + Jasmine in `src/app/**/*.spec.ts`

## Lint/Typecheck
- Functions: `cd functions && npm run lint`
- No frontend lint script defined (uses Angular defaults)