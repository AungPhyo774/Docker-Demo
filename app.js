const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Docker Security Lab");
});

app.listen(3000, () => {
    console.log("Running...");
});