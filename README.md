<h1>PrepWise &mdash; AI Mock Interview Platform</h1>

## Overview

PrepWise is a Next.js 15 application that delivers AI-assisted mock interviews, dynamic feedback, and personalized preparation flows for aspiring candidates. The project combines modern UI patterns with AI services to streamline interview practice.

## Folder Structure

```
.
├── app/
│   ├── (auth)/            # Authentication layouts and pages
│   ├── (root)/            # Public marketing pages and interview flows
│   ├── api/vapi/generate/ # Server route that connects to the Vapi AI service
│   └── dashboard/         # Authenticated dashboard area
├── components/            # Reusable UI components and domain widgets
├── constants/             # Shared constants (e.g., tech stacks, metadata)
├── firebase/              # Firebase client and admin configuration
├── lib/                   # Utilities, SDK wrappers, and server actions
├── public/                # Static assets (covers, icons, etc.)
├── types/                 # TypeScript declaration files
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.mjs    # Tailwind CSS setup
└── tsconfig.json          # TypeScript configuration
```

## Tech Stack

- Next.js 15 with the App Router and Turbopack
- React 19 with Server Components
- TypeScript 5 for end-to-end typing
- Tailwind CSS 4 with Radix UI primitives
- Firebase (client and admin SDKs)
- Vapi AI SDK and Google AI SDK for conversational agents
- Zod and React Hook Form for schema-driven forms

## Getting Started

1. **Install dependencies**
	 ```bash
	 npm install
	 ```
2. **Configure environment variables**
	 - Create an `.env.local` file and add the required Firebase, Vapi, and AI keys.
3. **Run in development**
	 ```bash
	 npm run dev
	 ```
	 The app starts on http://localhost:3000 by default.

## Additional Commands

- **Production build**
	```bash
	npm run build
	```
- **Start production server**
	```bash
	npm start
	```
- **Static analysis and linting**
	```bash
	npm run lint
	```

## Project Scripts Recap

| Script        | Description                          |
| ------------- | ------------------------------------ |
| `npm run dev` | Start the development server (turbopack) |
| `npm run build` | Create an optimized production build |
| `npm start`   | Run the production server            |
| `npm run lint`| Execute ESLint checks                |

For additional details or deployment notes, update this document as the project evolves.
