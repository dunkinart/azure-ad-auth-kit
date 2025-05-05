// test/test.js
const { getAccessToken, getUserProfile } = require('../index');

// Replace with real code from your Microsoft redirect callback
const code = "PASTE_REAL_CODE_HERE";

(async () => {
  try {
    const tokenData = await getAccessToken(code);
    console.log("🔐 Token Data:", tokenData);

    const profile = await getUserProfile(tokenData.access_token);
    console.log("👤 Profile:", profile);
  } catch (err) {
    console.error("❌ ERROR:", err.response?.data || err.message);
  }
})();
