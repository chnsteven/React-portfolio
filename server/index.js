const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
// const db = require("./models");

// Routers
const projectRouter = require("./routes/Projects");
app.use(cors());
app.use("/projects", projectRouter);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});