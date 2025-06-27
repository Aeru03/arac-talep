const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("API Çalışıyor"));
app.listen(5000);