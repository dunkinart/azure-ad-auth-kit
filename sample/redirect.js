const express = require("express");
const router = express.Router();
const { getAccessToken, getUserProfile } = require("azure-ad-auth-kit");

router.get("/", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("Missing code");

  try {
    const tokenData = await getAccessToken(code);
    const profile = await getUserProfile(tokenData.access_token);
    res.json({ tokenData, profile });
  } catch (err) {
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

module.exports = router;
