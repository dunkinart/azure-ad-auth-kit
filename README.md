# azure-ad-auth-kit

> 🔐 A simple and reusable Node.js helper kit to integrate Microsoft Azure Active Directory login using OAuth2 and Microsoft Graph API.

---

## 🚀 Quick Start (Run the Example Instantly)

✅ This package comes with a full working Express sample in the `sample/` folder.

---

### 📦 Step-by-Step to Run Demo:

```bash
# 1. Install the package globally or in any project
npm install azure-ad-auth-kit

# 2. Clone the repository (or download the source)
git clone https://github.com/dunkinart/azure-ad-auth-kit.git

# 3. Navigate to the included sample folder
cd azure-ad-auth-kit/sample

# 3. Create your own .env file
cp .env.example .env
```

Then open `.env` and add your Azure AD credentials:

```env
TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CLIENT_SECRET=your-client-secret
REDIRECT_URI=http://localhost:3000/redirect
```

---

### ▶️ Run the Sample App

```bash
npm install
npm start
```

Then open your browser:

```
http://localhost:3000/login
```

You will be redirected to Microsoft Login → then back to `/redirect` → and see your Microsoft profile in JSON.

---

## 📚 API Functions

### `getAccessToken(code)`
> Exchanges the Microsoft OAuth `code` for access & ID tokens.

Returns:
```json
{
  "access_token": "...",
  "id_token": "...",
  "expires_in": 3599,
  ...
}
```

---

### `getUserProfile(access_token)`
> Fetches user profile from Microsoft Graph `/me` endpoint.

Returns:
```json
{
  "displayName": "John Doe",
  "userPrincipalName": "john.doe@company.com",
  ...
}
```

---

## 📁 Folder Structure

```bash
azure-ad-auth-kit/
├── lib/               # Core package logic
├── test/              # Unit testing
├── sample/            # Full working Express app ✅
│   ├── .env.example
│   ├── login.js
│   ├── redirect.js
│   ├── server.js
│   └── package.json
├── backend/           # Optional backend demo (not part of package entry)
├── frontend/          # Optional frontend demo
├── index.js           # NPM package entry point
└── README.md
```

---

## ✅ When to Use This Package

| Use Case | Supported |
|----------|-----------|
| Microsoft Login for Web | ✅ Yes |
| Express Backends | ✅ Yes |
| Vite, Next.js, or custom frontend | ✅ Yes (with custom redirect) |
| Secure Auth Token Handling | ✅ Yes |
| Graph API Access | ✅ Yes |

---

## 📄 License

MIT License © [Awais Aslam](mailto:awais@dunkinart.com)
