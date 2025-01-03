const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  created_at: String,
  id: { type: mongoose.Schema.Types.Mixed }, 
  text: String,
  hashtags: [String],
  user: {
    id: Number,
    name: String,
    screen_name: String,
    location: String,
    description: String,
    followers_count: Number,
    friends_count: Number,
    statuses_count: Number,
  },
  place: {
    id: { type: String, required: false },
    url: { type: String, required: false },
    place_type: { type: String, required: false },
    name: { type: String, required: false },
    full_name: { type: String, required: false },
    country_code: { type: String, required: false },
    country: { type: String, required: false },
  },
  sentiment: String, 
});

module.exports = mongoose.model("Tweet", TweetSchema);
