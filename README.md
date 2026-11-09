# 🚀 Weybre SaaS Boilerplate

A modern, full-stack, enterprise-ready SaaS boilerplate built with **Next.js**, **NestJS**, and **Turborepo**. Designed to help you launch your next AI-powered SaaS or web application at warp speed. 

This boilerplate is pre-configured with a modular monorepo architecture, beautiful UI components, robust authentication, and a production-ready database setup.

---

## ✨ What's Included (Features)

### 🎨 Frontend (`apps/web`)
- **Framework:** Next.js 15 (App Router, React 19 ready).
- **Styling:** Tailwind CSS with a comprehensive, highly customized component library (`@workspace/ui`) inspired by shadcn/ui.
- **Pages:** Pre-built Landing Page (Hero, Features, Testimonials, Pricing), Auth pages, and a secure Dashboard with a responsive Sidebar.
- **Theming:** Full dark/light mode support with `next-themes`.

### ⚙️ Backend (`apps/api`)
- **Framework:** NestJS 11 for scalable, strongly-typed API endpoints.
- **Database:** PostgreSQL managed via **Drizzle ORM**.
- **Authentication:** **Better Auth** (Email/Password, Google OAuth) tightly integrated with NestJS and Next.js.
- **AI-Ready:** Pre-configured dependencies for LangChain, Pinecone, Google Vertex AI, and document parsing (PDFs).

### 🛠 Architecture & Tooling
- **Monorepo:** Turborepo for lightning-fast builds and shared workspaces.
- **Package Manager:** `pnpm`.
- **Shared Packages:** Reusable ESLint, TypeScript configs, and a standalone UI package.
- **White-labeling:** Global branding controlled seamlessly via environment variables.

---

## 🏗 How It Works

This project uses a monorepo structure to share code and configuration efficiently across the stack:

```text
weybre-ai/
├── apps/
│   ├── api/          # NestJS Backend (REST API, Auth, DB Models)
│   └── web/          # Next.js Frontend (Landing, Dashboard, Auth UI)
├── packages/
│   ├── ui/           # Shared React components (Tailwind, Radix UI)
│   ├── eslint-config/# Shared ESLint configurations
│   └── typescript-config/ # Shared tsconfig.json bases
└── turbo.json        # Turborepo build pipeline configuration
```

- The **Web** app imports components directly from the `ui` package, allowing you to maintain a consistent design system that can be shared if you ever add a mobile app or a secondary dashboard.
- The **API** handles heavy business logic, database migrations, and authentication flows via Better Auth.
- **Turborepo** caches build outputs, meaning you never compile the same code twice.

---

## 🚀 Getting Started

Follow these steps to use this boilerplate for your own SaaS.

### 1. Prerequisites
- **Node.js** (v20+ recommended)
- **pnpm** (v10+ recommended: `npm install -g pnpm`)
- **PostgreSQL** (Running locally or via a provider like Supabase/Neon)

### 2. Clone and Install
```bash
git clone https://github.com/your-username/weybre-ai.git my-saas
cd my-saas
pnpm install
```

### 3. Environment Configuration
Create a `.env` file in the root of the project (you can copy your existing setups) and in /api.

```ini
# --- Branding (White-label your app) ---
NEXT_PUBLIC_APP_NAME="My Awesome SaaS"
NEXT_PUBLIC_APP_COMPANY="Awesome Inc."

# --- Database ---
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# --- Authentication (Better Auth) ---
BETTER_AUTH_SECRET="generate-a-random-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# --- Optional OAuth & Integrations ---
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GOOGLE_CLOUD_PROJECT="your-gcp-project"
```
*(Note: Changing `NEXT_PUBLIC_APP_NAME` will automatically update the logo text, page titles, and footers across the web app!)*
### API .env

PORT=
DATABASE_URL=""
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http # Base URL of your app
BACKEND_PROT="http://localhost:3001"
RESEND_URL=
EMAIL_FROM="yourmail@example.com"
# Google OAuth credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

### 4. Database Setup
Navigate to the API and push your Drizzle schema to the database:
```bash
cd apps/api
pnpm dlx drizzle-kit push
cd ../..
```

### 5. Run the Development Server
From the root directory, start both the frontend and backend simultaneously using Turborepo:
```bash
pnpm dev
```
- **Frontend (Next.js):** [http://localhost:3000](http://localhost:3000)
- **Backend (NestJS):** [http://localhost:3001](http://localhost:3001) *(or your configured API port)*

---

## 📦 Building for Production

To build the entire monorepo for production:
```bash
pnpm build
```
This command runs the `build` script in all apps and packages in the correct topological order.

To start the production builds:
```bash
pnpm start
```

---

## 🤝 Contributing

We welcome contributions! Whether you're fixing a bug, adding a new feature, or improving documentation, here's how you can help:

1. **Fork the repository** and create your feature branch: `git checkout -b feature/my-new-feature`
2. **Make your changes:** Ensure you follow the existing code style and architecture.
3. **Lint & Test:** Run `pnpm lint` and `pnpm test` to catch any issues.
4. **Commit:** Use conventional commits (e.g., `feat: add user profile page`).
5. **Push:** Push your branch and open a Pull Request against the `main` branch.

### Architectural Guidelines for Contributors
- **UI Components:** Any new generic UI component should be placed in `packages/ui` rather than directly in `apps/web`.
- **Environment Variables:** If you add a new environment variable, ensure it's documented in the README.
- **Typings:** Maintain strict TypeScript typing. Avoid `any` whenever possible.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to clone it, modify it, and build your next big SaaS business on top of it!
