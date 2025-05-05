const express = require("express");
require("dotenv").config();

const app = express();
app.use("/login", require("./login"));
app.use("/redirect", require("./redirect"));

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
