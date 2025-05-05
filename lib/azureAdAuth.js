// lib/azureAdAuth.js

const axios = require("axios");
require("dotenv").config();

async function getAccessToken(code) {
  const { TENANT_ID, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

  const tokenResponse = await axios.post(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  return tokenResponse.data;
}

async function getUserProfile(access_token) {
  const response = await axios.get("https://graph.microsoft.com/v1.0/me", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  return response.data;
}

module.exports = {
  getAccessToken,
  getUserProfile,
};
