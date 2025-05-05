const express = require("express");
const router = express.Router();

const { TENANT_ID, CLIENT_ID, REDIRECT_URI } = process.env;

router.get("/", (req, res) => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    response_mode: "query",
    scope: "openid profile email offline_access https://graph.microsoft.com/User.Read",
  });

  const authUrl = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize?${params}`;
  res.redirect(authUrl);
});

module.exports = router;
