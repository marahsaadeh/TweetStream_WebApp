import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox.jsx';

const TweetDisplay = () => {
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from the Express server (API endpoint)
    fetch('http://localhost:5000/tweets')  // Ensure this points to your Express server's route
      .then((response) => response.json())
      .then((data) => {
        setTweets(data.tweets);  // Store tweets in state
        setFilteredTweets(data.tweets);  // Initially, show all tweets
      })
      .catch((error) => console.error('Error fetching tweets:', error));
  }, []);
  
  const handleSearch = (searchTerm) => {
    // Filter tweets based on the search term (case-insensitive)
    const results = tweets.filter((tweet) =>
      tweet.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTweets(results);  // Update the displayed tweets
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <h2>Tweets:</h2>
      <ul>
        {filteredTweets.length > 0 ? (
          filteredTweets.map((tweet) => (
            <li key={tweet._id}>
              <p>{tweet.text}</p>
              <small>{new Date(tweet.created_at).toLocaleString()}</small>
            </li>
          ))
        ) : (
          <p>No tweets found</p>
        )}
      </ul>
    </div>
  );
};

export default TweetDisplay;

