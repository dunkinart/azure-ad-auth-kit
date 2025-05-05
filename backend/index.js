const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateADUser } = require("./auth");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// 🔹 Silent login attempt (no popup, auto-login if session active)
app.get("/silent-login", (req, res) => {
  const authUrl = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&response_mode=query&scope=openid profile email offline_access https://graph.microsoft.com/User.Read&prompt=none&state=sso`;
  res.redirect(authUrl);
});


// 🔹 Normal login (fallback with account picker)
app.get("/login", (req, res) => {
  const authUrl = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}&response_mode=query&scope=openid profile email offline_access https://graph.microsoft.com/User.Read&prompt=select_account&state=manual`;
  res.redirect(authUrl);
});


app.get("/redirect", async (req, res) => {
  const code = req.query.code;
  const loginType = req.query.state === "sso" ? "sso" : "manual";

  try {
    const { user, access_token } = await authenticateADUser(code);

    const token = jwt.sign(
      { id: user.id, email: user.mail || user.userPrincipalName },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.redirect(`http://localhost:5173/dashboard?token=${token}&graphToken=${access_token}&loginType=${loginType}`);
  } catch (error) {
    res.redirect("http://localhost:5173/login-failed");
  }
});


app.get("/profile", async (req, res) => {
  const authHeader = req.headers.authorization;
  const graphToken = req.query.graphToken;

  if (!authHeader) return res.status(401).json({ message: "No token" });
  const token = authHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);

    const userDetails = await axios.get("https://graph.microsoft.com/v1.0/me", {
      headers: { Authorization: `Bearer ${graphToken}` },
    });

    res.json({ user: userDetails.data });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000/login");
});
