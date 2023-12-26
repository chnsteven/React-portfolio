const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
// const db = require("./models");

// Routers
const projectRouter = require("./routes/Projects");
const educationRouter = require("./routes/Education");
app.use(cors());
app.use("/projects", projectRouter);
app.use("/education", educationRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
