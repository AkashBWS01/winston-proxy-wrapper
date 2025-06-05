const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

const TARGET_URL = process.env.TARGET_URL;

app.use(express.json());

app.post("/detect", async (req, res) => {
  try {
    const response = await axios.post(TARGET_URL, req.body, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).json({ error: "Proxy error", details: err.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
