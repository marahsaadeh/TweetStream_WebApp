"use client";

import React, { useState } from "react";
import Image from "next/image";
import empHeartlogo from "../../public/images/emp-heart.png";
import heartlogo from "../../public/images/heart.png";
import twitter from"../../public/images/icons8-twitter.png";

const TweetsCard = ({ tweet, isFavorite, onToggleFavorite }) => {
  const { text, hashtags, user, sentiment, created_at, place } = tweet;

  const truncatedText = text.split(" ").slice(0, 5).join(" ") + "...";

  const handleFavoriteClick = () => {
    if (tweet.id) {
      onToggleFavorite(tweet.id);
    }
  };

  return (
    <div
      style={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
        width: "300px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <div  style={{
    position: "relative",
    background: "#48B49E",
    width: "100%",
    height: "180px",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
  }}>
        <Image
      
          src={twitter.src}
          width= {150}
          height={150}
          alt="Tweet Image"
        
        />
        <button
          onClick={handleFavoriteClick}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "8px",
            paddingTop:"11px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
          }}
        >
          <Image
            src={isFavorite ? heartlogo : empHeartlogo}
            alt="Favorite Icon"
            width={28}
            height={24}
          />
        </button>
      </div>


      <div style={{ padding: "16px" }}>

        <div>
          <p style={{ fontWeight: "bold", fontSize: "18px", color: "#333" }}>
            {user.name} (@{user.screen_name})
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            {user.location || "Unknown Location"}
          </p>
        </div>


        <div style={{ marginTop: "8px", marginBottom: "8px" }}>
          <p style={{ fontSize: "16px", color: "#333" }}>{truncatedText}</p>
        </div>


        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
          {hashtags.map((tag, index) => (
            <span
              key={index}
              style={{
                backgroundColor: "#e6f7ff",
                color: "#0050b3",
                fontSize: "12px",
                padding: "4px 8px",
                borderRadius: "4px",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>


        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p
            style={{
              fontWeight: "bold",
              color:
        tweet.sentiment === "Negative"
          ? "#FF6542" 
          : tweet.sentiment === "Positive"
          ? "#00BE98" 
          : "#E2C541",
            }}
          >
            Sentiment: {sentiment}
          </p>
          <p style={{ fontSize: "14px", color: "#999" }}>
            {new Date(created_at).toLocaleDateString()}
          </p>
        </div>


        {place && (
          <div>
            <p style={{ fontSize: "14px", color: "#666" }}>
              {place.full_name} - {place.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TweetsCard;
