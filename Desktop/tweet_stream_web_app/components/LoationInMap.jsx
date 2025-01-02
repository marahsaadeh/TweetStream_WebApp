"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

let L;
if (typeof window !== "undefined") {
  L = require("leaflet");
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
}

const geocodeLocation = async (location) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
    );
    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return { lat: parseFloat(lat), lon: parseFloat(lon) };
    }
    return null;
  } catch (error) {
    console.error("Error fetching geocode data:", error);
    return null;
  }
};

const LocationInMap = ({ tweets = [] }) => {
  const [locations, setLocations] = useState([]);
  const [bounds, setBounds] = useState(null); 

  useEffect(() => {
    const fetchCoordinates = async () => {
      const newLocations = await Promise.all(
        tweets.map(async (tweet) => {
          const place = tweet.place?.name || tweet.user?.location;

          if (place) {
            const coordinates = await geocodeLocation(place);
            return { ...tweet, coordinates };
          }
          return tweet;
        })
      );
      setLocations(newLocations);

      const markerBounds = newLocations
        .filter((tweet) => tweet.coordinates)
        .map((tweet) => [tweet.coordinates.lat, tweet.coordinates.lon]);
      if (markerBounds.length > 0 && L) {
        setBounds(L.latLngBounds(markerBounds));
      }
    };

    if (tweets.length > 0) fetchCoordinates();
  }, [tweets]);

  if (locations.length === 0) {
    return <p>No location found.</p>;
  }

  return (
    <div  style={{
      height: "600px",
      width: "100%",
      margin: "auto",
      border: "2px solid #333",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }}> 
      <MapContainer bounds={bounds} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((tweet, index) => {
          const { text, coordinates } = tweet;
          if (coordinates) {
            return (
              <Marker key={index} position={[coordinates.lat, coordinates.lon]}>
                <Popup>
                  <strong>{text}</strong>
                  <br />
                  <em>Location: {tweet.place?.name || tweet.user?.location || "Unknown"}</em>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
};

export default LocationInMap;

