const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const blog = require("./routes/blog.js");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database.js");

connectWithDB();

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

app.get("/", (req, res) => {
  res.send(`<h3>This is Homepage 🙏</h3>`);
});
