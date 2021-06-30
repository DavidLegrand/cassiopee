
const express = require("express");
const path = require("path");
const app = express();
const mailer = require("./mailer")
const cors = require("cors")

// app.use(express.static(path.join(__dirname, "waiting")));
// app.get("/", function (req, res, next) {
//   res.sendFile(path.join(__dirname, "waiting", "index.html"));
// });

app.use(express.json());
app.use(cors())
app.use("/api/sendmail", (req, res) => {
  mailer(req.body)
})

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 443;
app.listen(port, () => console.log(`running on port ${port}`));
