

```markdown
# Lian Tech Data Synt Dashboard

This project is a QA dashboard for LLM performance metrics, built with Next.js, Tailwind CSS, and shadcn/ui.

## Project Structure

```

├── public/             # Static files (images, logos, etc.)
├── app/                # Pages and routes (Next.js App Router)
│   ├── dashboard/      # QA dashboard UI
│   └── layout.tsx      # Root layout with header/footer
├── components/         # Reusable components (Navbar, Button, Modal, etc.)
├── lib/                # Helper functions and utilities
├── services/           # API calls and data fetching logic
├── hooks/              # Custom React hooks (e.g., useUpload, useAuth)
├── types/              # Global TypeScript types/interfaces
├── context/            # Global state (AuthContext, ThemeContext, etc.)
├── middleware.ts       # Auth guards and redirects
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── .env.local          # Environment variables
└── README.md           # Project setup, contribution, and notes

````

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YeabTesfaye/LianTech-Frontend
   cd LianTech-Frontend
````

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

* [Next.js](https://nextjs.org/) (App Router)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Lucide React](https://lucide.dev/icons/) for icons

## Customization

* **Colors:** Custom colors are defined in `tailwind.config.ts` to match the dashboard's theme. You can modify these to suit your branding.
* **Data:** The dashboard currently uses static placeholder data. For a real application, you would integrate with your backend API in the `services/` directory.
* **Pie Chart:** The pie chart is a simple CSS `conic-gradient` representation. For more complex charting needs, consider integrating a charting library like Recharts or Chart.js.




```

---
```
