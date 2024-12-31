"use client";

import React from "react";

const TweetsCard = ({ tweet }) => {
  const {
    text,
    hashtags,
    user,
    sentiment,
    created_at,
    place
  } = tweet;

  return (
    <div
      style={{
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
        width: "250px",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#fff",
        transition: "all 0.3s ease-in-out",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "18px", color: "#333" }}>
            {user.name} (@{user.screen_name})
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>
            {user.location || "Unknown Location"}
          </p>
        </div>
        <div>
          <p style={{ fontSize: "16px", color: "#333" }}>
            {text}
          </p>
        </div>
        <div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
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
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p
            style={{
              fontWeight: "bold",
              color:
                sentiment === "Positive"
                  ? "green"
                  : sentiment === "Negative"
                  ? "red"
                  : "gray",
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
