# ⚙️ ExamPilot Backend (NestJS Server)

This folder contains the robust, production-ready NestJS API server for **ExamPilot**. It serves authentication, course information, exam models, and moderation endpoints, communicating with a PostgreSQL database via Prisma ORM.

## 🛠️ Tech Stack

- **Framework**: NestJS v11 (Modular, decorators, dependency injection)
- **Database ORM**: Prisma ORM v5
- **Database**: PostgreSQL (Orchestrated locally with Docker)
- **Search Engine**: Meilisearch
- **Language**: TypeScript v5

---

## 🏗️ Architecture & Modules

The backend is built around a modular architecture located inside `src/modules/`:

1. **`database` module**: Configures the Prisma Client wrapper and exports it globally for dependency injection.
2. **`universities` module**: Handles syllabus data, core engineering branches, semesters, subjects, and exam pattern frequencies.
3. **`auth` module**: Manages session state and role control permissions.
4. **`ai` module**: Contains mock intelligence services to generate revision planners and simplify complex concepts.

---

## 📂 Project Structure

```text
backend/
├── prisma/                 # Database structure
│   ├── schema.prisma       # Prisma DB schema definition (PostgreSQL)
│   └── seed.ts             # Initial university and syllabus seed data
├── src/
│   ├── modules/            # Core business domains (auth, database, universities, ai)
│   ├── app.module.ts       # Root module importing all sub-domains
│   └── main.ts             # REST server bootstrap entry point
├── test/                   # Jest end-to-end (E2E) testing suite
├── nest-cli.json           # Nest compilation settings
├── tsconfig.json           # Backend TypeScript configuration
└── package.json            # Scripts and dependency list
```

---

## 🛠️ Run Scripts

Execute these commands from inside the `backend` folder:
- **Build Server**: `npm run build`
- **Run Development Watcher**: `npm run start:dev` (Runs on port `5000`)
- **Run Production Server**: `npm run start:prod` (Runs compiled javascript from `dist/main.js`)
- **Run Unit Tests**: `npm run test`
- **Format Code**: `npm run format`

---

## 💾 Database Operations (Prisma)

Ensure a PostgreSQL database is running (e.g. via the root Docker Compose setup).

1. **Verify Schema & Apply Changes**:
   To push schema changes directly to the database without generating formal migration files (best for rapid prototyping):
   ```bash
   npx prisma db push
   ```

2. **Run Seeds**:
   Populate the database with initial mock subjects, questions, and revision lists:
   ```bash
   npx prisma db seed
   ```

3. **Open Prisma Studio**:
   To view and edit database rows visually in your browser:
   ```bash
   npx prisma studio
   ```

---

## ☁️ Production Backend Deployment

To deploy this backend to services like **Railway**, **Render**, or **Heroku**:

1. **Configure Environment Variables**:
   Provide the following environment configurations:
   - `DATABASE_URL`: Connection string for a production PostgreSQL instance (e.g. Supabase, Neon, or RDS).
     *Format*: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public`
   - `PORT`: Server port (typically `5000` or assigned dynamically).

2. **Deployment Commands**:
   - **Build command**: `npm run build`
   - **Pre-deploy / Release command**: `npx prisma db push` (Pushes latest schema to the database automatically during deployment pipelines)
   - **Start command**: `npm run start:prod`
