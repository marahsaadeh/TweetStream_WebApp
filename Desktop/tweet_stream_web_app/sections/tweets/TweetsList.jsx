"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import TweetsCard from "./TweetsCard";
import LocationInMap from "@/components/LoationInMap";
import TrendChart from "../../components/TrendChart";
import SentimentChart from "../../components/SentimentChart";

import axios from "axios";

export default function TweetsList() {
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowingFavorites, setIsShowingFavorites] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(12);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tweets");

        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);

  useEffect(() => {
    let filtered = tweets;
  
    if (searchQuery) {
      filtered = filtered.filter((tweet) =>
        tweet.text.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
    }
  
    if (isShowingFavorites) {
      filtered = filtered.filter((tweet) => favorites.includes(tweet._id));
    }
  
    setFilteredTweets(filtered); 
  }, [tweets, searchQuery, isShowingFavorites, favorites]);
  
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id] 
    );
  };
  
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          marginTop: "-90px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
        }}
      >
        <button
          onClick={() => setIsShowingFavorites(!isShowingFavorites)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
            backgroundColor: "#FFF",
            color: "#6A0DAD",
            border: "1px solid #6A0DAD",
            marginTop: "80px",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            fontWeight: "bold",
            width: "180px",
            height: "50px",
            backgroundColor: isShowingFavorites ? "#6A0DAD" : "#FFF",
            color: isShowingFavorites ? "#FFF" : "#6A0DAD",
          }}
        >
          <img
            src="/images/emp-heart.png"
            alt="heart icon"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "8px",
            }}
          />
          {isShowingFavorites ? "Show All" : "Favorites"}
        </button>

        <SearchBar placeholder="search" onSearch={setSearchQuery} />
      </div>


      {searchQuery && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          {filteredTweets.slice(0, currentIndex).map((tweet) => (
            <TweetsCard
            key={tweet._id}
              tweet={tweet}
              isFavorite={favorites.includes(tweet._id)}
              onToggleFavorite={() => toggleFavorite(tweet._id)}
              />
          ))}
        </div>
      )}

{searchQuery && (
        <>
          <h2>Trend Diagram</h2>
          <TrendChart tweets={filteredTweets} />

          <h2>Sentiment Analysis</h2>
          <SentimentChart tweets={filteredTweets} />
        </>
      )}

      <LocationInMap tweets={filteredTweets} />
    </div>
  );
}
