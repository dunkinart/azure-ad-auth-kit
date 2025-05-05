const axios = require("axios");
require("dotenv").config();

async function authenticateADUser(code) {
  const tokenEndpoint = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;

  const params = new URLSearchParams();
  params.append("client_id", process.env.CLIENT_ID);
  params.append("client_secret", process.env.CLIENT_SECRET);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", process.env.REDIRECT_URI);
  params.append("scope", "openid profile email offline_access https://graph.microsoft.com/User.Read");

  const response = await axios.post(tokenEndpoint, params);
  const { access_token } = response.data;

  const userInfo = await axios.get("https://graph.microsoft.com/v1.0/me", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  return { user: userInfo.data, access_token };
}

module.exports = { authenticateADUser };
