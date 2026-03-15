# ZeroT Base44 Core

This is the secure, authenticated core dashboard for ZeroT SMEs. 
It is built as a separate React SPA (Single Page Application) using Vite and the `@base44/sdk` to ensure maximum security, separation of concerns, and compliance.

## Architecture

- **Frontend Framework:** React 18 + Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS
- **Backend/BaaS:** Base44

## Core Modules

- **Dashboard:** Executive overview of readiness scores and open incidents.
- **Reports:** Filterable list of security incidents and AI triaged threats.
- **Checklist (Response Tasks):** Role-based assignment of mitigation tasks.
- **Weekly Brief:** AI-generated executive summaries for founders.

## Running Locally

Because this application relies on a secure Base44 backend instance, you need appropriate environment variables to run it locally.

```bash
npm install
npm run dev
```
