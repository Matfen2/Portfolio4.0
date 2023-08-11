const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "/dist/portfolio")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/*", (res, req) => {
  res.sendFile(path.join(__dirname, "/dist/portfolio/index.html"));
});

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
