import express from "express";
import bodyParser from "body-parser";

// Import routes from routes folder
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// All routes here will have /users prefix
app.use("/", usersRoutes);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
