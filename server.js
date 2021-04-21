const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));


app.get("/test-landing", function (req, res) {
  console.log('there')
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/*", function (req, res) {
  console.log('here')
  res.sendFile(path.join(__dirname, "build", "static", "media", "waiting.jpg"));
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`running on port ${port}`));
