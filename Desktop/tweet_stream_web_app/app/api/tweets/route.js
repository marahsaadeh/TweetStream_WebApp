const express = require("express");
const router = express.Router();
const Tweet = require("../../DBconfig/mongoDB");

router.get("/tweets", async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tweets" });
  }
});

module.exports = router;
