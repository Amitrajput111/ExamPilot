# 🌐 ExamPilot Frontend (Next.js client)

This folder contains the Next.js client for **ExamPilot**. Built using modern React practices, Next.js 15 (App Router), and Tailwind CSS v4, it provides a high-fidelity, interactive, and responsive interface for studying university syllabus subjects.

## 🛠️ Tech Stack

- **Framework**: Next.js v15.2.7 (App Router, Turbopack)
- **UI Library**: React v19.2.4
- **Styling**: Tailwind CSS v4 (using the `@tailwindcss/postcss` compiler)
- **Icons**: Lucide React
- **Compilation**: Enabled with Babel React Compiler plugin support

---

## ⚡ Key Features

1. **Academic Wizard**: An interactive selector allowing students to specify their University, Branch, and Semester, which dynamically loads their custom curriculum subjects.
2. **Interactive Exam Study Room**:
   - **Exam Pattern Tab**: Displays syllabus topics categorized by examination appearance frequency (High, Medium, Low).
   - **Question Deck Tab**: Solved previous year questions categorized by marks, including SVGs with simple diagrams.
   - **Revision Guide Tab**: Interactive markdown guides with collapsible recall points.
3. **AI Revision Planner**: A modal interface that generates a customized 1-Day Revision checklist.
4. **Offline Mock Architecture**: Includes a comprehensive database (`src/lib/mockData.ts`) containing real questions, syllabus paths, SVG diagrams, and exam guidelines for RGPV CSE Semesters 1 and 5. This allows the app to function fully self-contained without a live server connection.
5. **Admin Console**: Interface to moderate submitted notes, register new universities, and upload syllabus documents.

---

## 📂 Directory Structure

```text
frontend/
├── public/                 # Static public assets (Favicon, logos, etc.)
└── src/
    ├── app/                # Next.js App Router folders
    │   ├── admin/          # Admin moderation dashboard route
    │   ├── dashboard/      # Core course selection dashboard
    │   ├── subject/        # Interactive study workspace
    │   │   └── [id]/       # Dynamic subject dashboard route
    │   ├── globals.css     # Tailwind imports and custom utilities
    │   ├── layout.tsx      # Root HTML layout and font optimization
    │   └── page.tsx        # Selection Wizard lander page
    ├── components/         # Reusable layout structures
    │   ├── Header.tsx      # Global search, navigation, and role toggle
    │   └── Footer.tsx      # Platform information footer
    └── lib/
        └── mockData.ts     # In-depth static dataset for offline execution
```

---

## 🚀 Dev Run Scripts

Run scripts from the `frontend` folder:
- **Run dev server**: `npm run dev` (Runs locally on port `3002`)
- **Build production app**: `npm run build`
- **Start built app**: `npm run start`
- **Lint check**: `npm run lint`

---

## ☁️ Vercel Deployment Instructions

### Method 1: Git Integration (Recommended)
1. In the [Vercel Dashboard](https://vercel.com/new), select **Import Project**.
2. Connect your GitHub account and import the repository.
3. In the project setup form, configure the following:
   - **Framework Preset**: `Next.js`
   - **Root Directory**: Click "Edit" and choose `frontend`. (Check "Include files outside of the Root Directory in the Build Step" if prompted, to allow package-lock.json sharing).
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Select **Deploy**. Vercel will build and serve your Next.js application at a premium edge-network domain!

### Method 2: Vercel CLI
If you have Vercel CLI installed:
```bash
cd frontend
vercel login
vercel
```
Follow the prompts to link the project and deploy it.
