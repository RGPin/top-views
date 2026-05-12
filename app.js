const express = require("express");
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { message: "I don't get EJS" });
});

app.listen(8000, (error) => {
  if (error) throw error;

  console.log("Listening to port 8000...");
});
