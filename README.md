# 🔐 Azure AD SSO Authentication Kit (React + Node.js)

A full-stack authentication solution using **Microsoft Azure Active Directory (Azure AD)** for **Single Sign-On (SSO)**. Built with:

- ⚛️ **React (Next.js)** frontend
- 🟩 **Node.js (Express)** backend
- 🔐 **Microsoft OAuth2** for secure login
- 📡 **Microsoft Graph API** for user data
- 🔑 **JWT** for session management

> Ideal for enterprise applications like **Dunkinart** or any internal portal requiring secure Microsoft login.

---

## 🚀 Features

- ✅ Microsoft OAuth2 Authorization Code Flow
- ✅ Seamless SSO with silent login (`prompt=none`)
- ✅ Real-time user profile fetch from Microsoft Graph
- ✅ Backend JWT generation post-login
- ✅ Secure session handling with cookies (optional)
- ✅ Role-based routing (extendable)
- ✅ Frontend ↔️ Backend API integration
- ✅ Public demo users (mock data)

---

## 🏗️ Tech Stack

| Layer     | Tech                      |
|-----------|---------------------------|
| Frontend  | React (Next.js)           |
| Backend   | Node.js + Express         |
| Auth      | Microsoft Azure AD (OAuth2) & (SSO) |
| API       | Microsoft Graph API       |
| Tokens    | JWT                       |

---

## 📁 Folder Structure

```
azure-ad-auth-kit/
├── backend/                 # Node.js Express API
│   ├── .env                 # Environment config
│   ├── .gitignore
│   ├── auth.js              # OAuth2 and JWT logic
│   ├── index.js             # Express server entry
│   ├── package.json
│   └── package-lock.json
│
├── frontend/                # React (Vite) Frontend
│   ├── .gitignore
│   ├── index.html           # Vite HTML entry
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       ├── App.jsx
│       ├── Dashboard.jsx
│       └── main.jsx
│
├── .gitignore
└── README.md
```

---

## 🔐 Azure AD App Setup (Azure Portal)

1. Navigate to [Azure Portal](https://portal.azure.com/)
2. Go to:  
   **Azure Active Directory → App registrations → New registration**
3. Fill in:
   - **Name:** Your app name
   - **Redirect URI (Web):** `http://localhost:3000/redirect`
4. After creation, note down:
   - **Application (client) ID**
   - **Directory (tenant) ID**
   - **Client Secret** (from Certificates & Secrets)

---

## ⚙️ Backend Setup (Node.js)

### 📄 `.env`

```env
TENANT_ID=xxxxxxxx-cccc-1111-eeee-888888888888
CLIENT_ID=cccccccc-xxxx-8888-1111-xxxxxxxxxxxx
CLIENT_SECRET=OO*8Q~xSSP**************CvfUWyDCj**As2bC9
REDIRECT_URI=http://localhost:3000/redirect
JWT_SECRET=YourSuperSecretKey
```

> Populate this file with your actual values before starting the backend.

### 📦 Install & Run

```bash
cd backend
npm install
npm run dev
```

---

## 💻 Frontend Setup

### 📦 Install & Run

```bash
cd frontend
npm install
npm run dev
```

Visit for OAuth: [localhost:3000/login](localhost:3000/login)
Visit for SSO : [localhost:3000/silent-login](localhost:3000/silent-login)

---

## 🔌 API Endpoints

| Method | Endpoint         | Description                    |
|--------|------------------|--------------------------------|
| GET    | `/login`         | Redirects to Microsoft login   |
| GET    | `/silent-login`  | Attempts silent SSO login      |

---

## 👥 Public Demo Users

| Name         | Email                 | Role        |
|--------------|-----------------------|-------------|
| Awais Aslam  | awais@dunkinart.com   | Admin       |
| Test User    | test@cardly.com       | Employee    |
| Jane Doe     | jane.doe@example.com  | HR Manager  |

> These are mock users for demonstration, reflecting Azure AD integration.

---

## 📂 .gitignore (recommended)

```gitignore
# Environment files
.env
.env.*
.env.local

# Node modules
node_modules/

# Logs
logs
*.log

# Vite / React cache
dist/
.cache/
.vite/

# OS and Editor
.DS_Store
.vscode/
```

---

## 🤝 Contributing

Feel free to fork the repo, improve it, and open pull requests. All contributions are welcome.

---

## 📄 License

MIT © 2025 DunkinArt
