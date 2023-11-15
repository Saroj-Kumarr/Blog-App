const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDB = require("./config/database");

connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h3>Namaste Node.js, Express.js and MongoDB 🙏</h3>`);
});

app.listen(8000, () => {
  console.log("Server is started on 8000");
});
