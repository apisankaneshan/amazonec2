const express = require("express");
const fs = require("fs");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dir)
})