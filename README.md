# ZeroT — Cybersecurity Readiness for SMEs

ZeroT is a lightweight, AI-driven cybersecurity readiness assistant designed specifically for Small and Medium Enterprises (SMEs) without dedicated security teams. 

This project provides a premium MVP landing page that explains the value proposition, highlights the core workflows, and features an integrated Gemini-powered Q&A Assistant.

## Live Demo
🚀 **[View Live Site](https://rm-rf-lovat.vercel.app)**

## Features

- **Next.js 15 App Router:** Built for performance and modern web standards.
- **ZeroT Morphism Design:** A custom glassmorphism design system built with Tailwind CSS v4, featuring ambient backgrounds, floating UI elements, and soft shadows.
- **AI Assistant Widget:** A floating Q&A chat widget powered by the Gemini API (`gemini-2.5-flash` / `gemini-2.5-flash-lite`).
- **Responsive Layout:** Beautiful and functional across desktop, tablet, and mobile devices.
- **Synthetic Public Data Integration:** Designed to contextualize cybersecurity threats using synthetic examples modeled after open data sources (e.g., opendata.az).

## Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites
- Node.js 18+ installed
- A Google AI Studio API Key (for the Gemini assistant)

### 2. Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/Toghrul-Aliyev/rm--rf.git
cd rm--rf
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory and add your API key and login redirect URL:

```env
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_LOGIN_URL=https://app.zerot.io/login
```

### 4. Running the Development Server
Start the Next.js development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/globals.css`: Contains the "ZeroT Morphism" custom Tailwind CSS utilities.
- `app/page.tsx`: The main landing page composing all sections.
- `app/api/chat/route.ts`: Secure server-side route for communicating with the Gemini API.
- `components/`: Reusable UI components (Hero, Navbar, FeatureCard, ChatWidget, etc.).
- `lib/sample-data.ts`: Static content arrays to populate the MVP without needing a database.
- `lib/chat-system-prompt.ts`: The instruction set for the ZeroT Q&A Assistant.

## Deployment

This project is built to be deployed on Vercel with zero configuration required beyond setting environment variables.

1. Import the GitHub repository into your Vercel Dashboard.
2. Add `GEMINI_API_KEY` and `NEXT_PUBLIC_LOGIN_URL` to the Environment Variables.
3. Click Deploy.

## License
Copyright © 2026 ZeroT. All rights reserved.
