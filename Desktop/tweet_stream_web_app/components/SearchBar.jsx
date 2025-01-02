"use client";

import React from "react";
import Image from "next/image";
import Search from "../public/images/Search.svg";

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        marginTop: "160px",
        paddingLeft: "175px",
        paddingRight: "10px",
        marginBottom:"80px",
      }}
    >
      <div style={{ position: "relative", width: "50%" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            marginLeft:"7px",
            marginTop:"4px"
          }}
        >
          <Image
            src={Search.src}
            alt="Search"
            width={20}
            height={20}
            style={{ objectFit: "contain" }}
          />
        </div>
        <input
          type="search"
          placeholder={placeholder}
          style={{
            width: "100%",
            height: "4rem",
            border: "2px solid #ccc",
            borderRadius: "999px",
            paddingLeft: "2.5rem",
            paddingRight: "1rem",
            fontSize: "1rem",
            outline: "none",
            boxSizing: "border-box",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
