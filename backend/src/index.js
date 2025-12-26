const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
