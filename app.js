const express = require("express");
const path = require("node:path");

const app = express();
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links, users });
});

app.get("/about", (req, res) => {
  res.render("about", { links });
});

app.listen(8000, (error) => {
  if (error) throw error;

  console.log("Listening to port 8000...");
});
