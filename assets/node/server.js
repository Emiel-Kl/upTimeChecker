const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Enable CORS for frontend requests
app.use(cors());

app.get("/check", async (req, res) => {
    const site = req.query.url;
    if (!site) {
        return res.status(400).json({ error: "Missing 'url' parameter" });
    }

    try {
        const response = await axios.get(site, { timeout: 5000 }); // 5-second timeout
        res.json({
            status: response.status,
            message: `Site is online (Status: ${response.status})`
        });

    } catch (error) {
        let statusCode = error.response ? error.response.status : "offline";
        let message = `Site is unreachable`;
        if (statusCode !== "offline") {
            message = `Site returned error (Status: ${statusCode})`;
        }

        res.json({
            status: statusCode,
            message: message,
        });
    }
});

app.listen(PORT, () => console.log(`✅ Uptime Checker Running on Port ${PORT}`));