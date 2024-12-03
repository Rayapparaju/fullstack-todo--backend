const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const toDoRoutes = require("./routes/toDoRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/todos", toDoRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Database connection failed", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
