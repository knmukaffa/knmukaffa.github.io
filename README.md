# QA Portfolio (Next.js + Tailwind, Static Export)

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build static & preview
```bash
npm run build
npm start
# open the URL printed (serves ./out)
```

## Notes
- Edit contact form endpoint in `src/app/contact/page.tsx` (`YOUR_FORM_ID` -> your Formspree ID).
- Replace `public/avatar.svg` with your own illustration or photo (keep the same name).
- Set your real domain in `src/app/layout.tsx` (OpenGraph) and `src/app/sitemap.ts`.
