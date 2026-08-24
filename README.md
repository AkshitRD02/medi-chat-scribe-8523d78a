# MediKiosk Companion 

Build a 3-screen healthcare kiosk web app called MediKiosk. Screen 1: patient welcome/consent screen with language dropdown and mock ABHA ID scan button. Screen 2: a chat interface where the patient describes symptoms and an AI (via API) asks clinical follow-up questions using the SOCRATES framework (onset, character, radiation, associated symptoms, timing, exacerbating factors, severity), plus a document upload button that shows a mock extraction result after upload. Screen 3: a clean physician-facing summary card showing Chief Complaint, History of Present Illness, Past Medical History, and Extracted Document Data, with Edit and Confirm buttons. Use a clean clinical/medical color palette, mobile/tablet-friendly touch targets.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://medi-chat-scribe.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/161d3821-f0e1-4866-b8cf-2fdcc9a81620).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
