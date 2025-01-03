const express = require("express");
const mongoose = require("mongoose");
const tweetsRoutes = require("./app/api/tweets/route");

const app = express(); 
app.use(express.json()); 
const cors = require("cors");
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://marah4saadeh:T3T3PCAitM5T5Vih@cluster0.e8qpm.mongodb.net/TweetDB",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api", tweetsRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
