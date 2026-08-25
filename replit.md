# MediKiosk on Replit

## Run locally

The app uses the existing Vite/TanStack React stack:

```sh
npm run dev
```

The Replit preview uses the `Start application` workflow on port 5000.

## Notes

- The symptom intake AI server function requires the `LOVABLE_API_KEY` secret for live AI responses.
- Document extraction is intentionally mocked and appears after a short loading state.
- Emergency phrases are detected locally in all eight supported kiosk languages. A priority alert stops the normal AI question flow for that session.