server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Allow cross-origin requests
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tweets/db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const tweetSchema = new mongoose.Schema({
  text: String,
  created_at: Date
});

const Tweet = mongoose.model('Tweet', tweetSchema);

// Endpoint to fetch all tweets
app.get('/tweets', async (req, res) => {
  try {
    const tweets = await Tweet.find();
    res.json({ tweets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tweets' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
