const express = require("express");
const path = require("path");
const app = express();


app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "build", "waiting.html"));
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/test", function (req, res, next) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`running on port ${port}`));
