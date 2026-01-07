# Company Profile (Vue 3 + Node.js)

Simple company profile website with a Vue 3 frontend (Vite) and a Node.js / Express backend.

---

URL Demo: https://youtu.be/JGtwrjso1EE

## 🔧 Tech Stack

- Frontend

  - Vue 3 (Composition API, `<script setup>`)
  - Vite
  - Tailwind CSS, PostCSS, Autoprefixer
  - Vue Router
  - Axios (used via `src/services/api.js`)
  - AOS (scroll animations), Heroicons, SweetAlert2

- Backend

  - Node.js (ES Modules)
  - Express
  - MySQL (mysql2)
  - bcryptjs (password hashing)
  - jsonwebtoken (JWT)
  - multer (file uploads)
  - cors, dotenv
  - nodemon (dev)

- Database
  - SQL file: `company_profile.sql` (located in `company-profile-backend/`) — default DB name: `company_profile`

---

## ✅ Prerequisites

- Git
- Node.js (v16+ recommended) and npm or yarn
- MySQL or compatible (TiDB is also supported)

---

## 🚀 Quick start (local)

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   cd company-profile
   ```

2. Backend setup

   ```bash
   cd ../company-profile-backend
   npm install
   ```

   - Create a `.env` file in `company-profile-backend/` with the following (example):

     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=
     DB_NAME=company_profile
     DB_PORT=3306
     PORT=5000
     ```

   - Import the database SQL file (`company_profile.sql`):

     If the SQL file creates the database itself:

     ```bash
     mysql -u root -p < company_profile.sql
     ```

     Or create the DB and import into it:

     ```bash
     mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS company_profile;"
     mysql -u root -p company_profile < company_profile.sql
     ```

   - Start the backend in development:

     ```bash
     npm run dev
     ```

   - Verify the backend is running: open `http://localhost:5000/api/test-db`

3. Frontend setup

   ```bash
   cd ../company-profile
   npm install
   ```

   - Optionally set API base URL in a `.env` (root of `company-profile/`):

     ```env
     VITE_API_URL=http://localhost:5000
     ```

   - Start the frontend:

     ```bash
     npm run dev
     ```

4. Open the app

   - Frontend: usually available at `http://localhost:5173` (Vite)
   - Backend: `http://localhost:5000`

---

## Useful commands

- Frontend

  - `npm run dev` — start Vite dev server
  - `npm run build` — build for production

- Backend
  - `npm run dev` — start server with nodemon
  - `npm start` — run server with node

---

## 📁 Files of interest

- Frontend: `src/` (components, views, services)
- Backend: `server.js`, `routes/`, `controllers/`, `config/db.js`
- Database SQL: `company-profile-backend/company_profile.sql`

---

If you want, I can add an example `.env.example` file for both frontend and backend or add a short troubleshooting section. Let me know which you'd prefer.
