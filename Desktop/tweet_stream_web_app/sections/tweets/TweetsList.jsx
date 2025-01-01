"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import TweetsCard from "./TweetsCard";
import LocationInMap from "@/components/LoationInMap";
const initialTweets = [
  {
  "_id": {
    "$oid": "67709c2447ce704037d70318"
  },
  "created_at": "Tue Dec 31 07:14:22 +0000 2013",
  "id": {
    "$numberLong": "417916626596806656"
  },
  "text": "Boom bitch get out the way! #drunk #islands #girlsnight #BJs #hookah #zephyrs #boulder #marines…",
  "hashtags": [
    "#drunk",
    "#islands",
    "#girlsnight",
    "#BJs",
    "#hookah",
    "#zephyrs",
    "#boulder",
    "#marines"
  ],
  "user": {
    "id": 430309700,
    "name": "Dannie Aguayo",
    "screen_name": "lilcakes3209",
    "location": "...City girl.Country feel...",
    "description": "if you're good at something, never do it for free --The Joker",
    "followers_count": 58,
    "friends_count": 227,
    "statuses_count": 4441
  },
  "place": {
    "id": "10de09f288b1665c",
    "url": "https://api.twitter.com/1.1/geo/id/10de09f288b1665c.json",
    "place_type": "city",
    "name": "Pasadena",
    "full_name": "Pasadena, CA",
    "country_code": "US",
    "country": "United States"
  },
  "sentiment": "Positive"
},
{
  "_id": {
    "$oid": "67709c4447ce704037d7031a"
  },
  "created_at": "Tue Dec 31 18:49:31 +0000 2013",
  "id": {
    "$numberLong": "418091565161017344"
  },
  "text": "@WeatherDude17 Not that revved up yet due to model inconsistency. I'd say 0-2\" w/ a decent chance of >1\" #snow #COwx #weather #Denver",
  "hashtags": [
    "#snow",
    "#COwx",
    "#weather",
    "#Denver"
  ],
  "user": {
    "id": 164856599,
    "name": "Josh Larson",
    "screen_name": "coloradowx",
    "location": "Denver, CO",
    "description": "Bringing you weather information & forecasts for the Denver metro area and Colorado. Previously worked at NOAA's CPC & @capitalweather.",
    "followers_count": 2181,
    "friends_count": 458,
    "statuses_count": 18024
  },
  "sentiment": "Neutral"
},
{
  "_id": {
    "$oid": "6770a1b447ce704037d7031c"
  },
  "created_at": "Wed Jan 01 06:12:15 +0000 2014",
  "id": {
    "$numberLong": "418263379027820544"
  },
  "text": "Happy New Year #Boulder !!!! What are some of your New Years resolutions this year?",
  "hashtags": [
    "#Boulder"
  ],
  "user": {
    "id": 120161415,
    "name": "Boulder, CO Ciclovia",
    "screen_name": "BoulderGreenSts",
    "location": "Boulder, Colorado",
    "description": "Green Streets transforms communities & people through car-free street experiences. We create measurable social & environmental impact. Ciclovia Is 9/27/2015",
    "followers_count": 1754,
    "friends_count": 1963,
    "statuses_count": 1988
  },
  "sentiment": "Positive"
},
{
  "_id": {
    "$oid": "6770a1c447ce704037d7031e"
  },
  "created_at": "Mon Dec 30 23:02:29 +0000 2013",
  "id": {
    "$numberLong": "417792838428925952"
  },
  "text": "We're looking for the two who came to help a cyclist after a hit-and-run at 30th/Baseline ~11pm Dec 23rd #Boulder #CO",
  "hashtags": [
    "#Boulder",
    "#CO"
  ],
  "user": {
    "id": 27020339,
    "name": "J. Paxon Reyes",
    "screen_name": "jpreyes",
    "location": "Lincoln, Nebraska",
    "description": "Graduate student at the University of Nebraska - Lincoln.",
    "followers_count": 530,
    "friends_count": 525,
    "statuses_count": 8220
  },
  "sentiment": "Neutral"
},
{
  "_id": {
    "$oid": "6770a1d547ce704037d70320"
  },
  "created_at": "Mon Dec 30 20:29:20 +0000 2013",
  "id": {
    "$numberLong": "417754295455723520"
  },
  "text": "Story of my life! 😂 #boulder",
  "hashtags": [
    "#boulder"
  ],
  "user": {
    "id": 28122813,
    "name": "Chelsea Hider",
    "screen_name": "ChelseaHider",
    "location": "Cambridge, England",
    "description": "History graduate, 24, not as nerdy as you'd expect. Oh, and have you ever seen Batman and I in the same room? Didn't think so.",
    "followers_count": 378,
    "friends_count": 401,
    "statuses_count": 3234
  },
  "place": {
    "id": "e0a47a1daac8224e",
    "name": "Cambridge, England",
    "country": "United Kingdom"
  },
  "sentiment": "Neutral"
},
{
  "_id": {
    "$oid": "6770a6ed47ce704037d70328"
  },
  "created_at": "Tue Dec 31 03:02:53 +0000 2013",
  "id": {
    "$numberLong": "417853337313083392"
  },
  "text": "Did anyone lose a boat at Highline Lake? Image, courtesy: Tracy DiGesualdo #GJCO #WesternSlope #COwx",
  "hashtags": [
    "#GJCO",
    "#WesternSlope",
    "#COwx"
  ],
  "user": {
    "id": 193168534,
    "name": "Dann Cianca",
    "screen_name": "danncianca",
    "location": "Salinas, California",
    "description": "--Chief Meteorologist-KION(CBS&CW)-- (B.S., Meteorology-@msudenver) WeatherFanatic-StormChaser ScienceMusicMapsOutdoors-CHIsports MT-CO-CA #CAwx",
    "followers_count": 2222,
    "friends_count": 2288,
    "statuses_count": 13186
  },
  "sentiment": "Neutral"
},
{
  "_id": {
    "$oid": "6770a70747ce704037d7032a"
  },
  "created_at": "Tue Dec 31 23:39:35 +0000 2013",
  "id": {
    "$numberLong": "418164562899132416"
  },
  "text": "RT @BrendansWeather: Chance snow tonight/New Years Day. Light accumulation possible. Follow @weather5280 #cowx",
  "hashtags": [
    "#cowx"
  ],
  "user": {
    "id": 164856599,
    "name": "Josh Larson",
    "screen_name": "coloradowx",
    "location": "Denver, CO",
    "description": "Bringing you weather information & forecasts for the Denver metro area and Colorado. Previously worked at NOAA's CPC & @capitalweather.",
    "followers_count": 2181,
    "friends_count": 458,
    "statuses_count": 18024
  },
  "sentiment": "Neutral"
},
{
  "_id": {
    "$oid": "6770a71e47ce704037d7032c"
  },
  "created_at": "Tue Dec 31 03:58:41 +0000 2013",
  "id": {
    "$numberLong": "417867378094252032"
  },
  "text": "“@EricRobertson: Second winter sky shot. #colorado #nightsky #cowx",
  "hashtags": [
    "#colorado",
    "#nightsky",
    "#cowx"
  ],
  "user": {
    "id": 33267773,
    "name": "TJ Janicky, PT, DPT",
    "screen_name": "TJ_Janicky",
    "location": "Baltimore, MD",
    "description": "Doctor of Physical Therapy - Certified Manual Physical Therapist - Board Certified Orthopedic Specialist - @EIMTeam OMPT Fellow-in-Training",
    "followers_count": 3795,
    "friends_count": 2481,
    "statuses_count": 16073
  },
  "sentiment": "Neutral"
},
{
  "_id": {
    "$oid": "6770a73347ce704037d7032e"
  },
  "created_at": "Tue Dec 31 00:40:27 +0000 2013",
  "id": {
    "$numberLong": "417817492074274816"
  },
  "text": "All day #happyhour today!! Woohoo! #boulder #japango #sushi",
  "hashtags": [
    "#happyhour",
    "#boulder",
    "#japango",
    "#sushi"
  ],
  "user": {
    "id": 26637950,
    "name": "Japango",
    "screen_name": "JapangoSushi",
    "location": "Boulder, Colo.",
    "description": "Japango Sushi Restaurant Boulder is the premier destination for fresh Sushi!",
    "followers_count": 2500,
    "friends_count": 2608,
    "statuses_count": 6840
  },
  "sentiment": "Positive"
},
{
  "_id": {
    "$oid": "6770a73f47ce704037d70330"
  },
  "created_at": "Wed Jan 01 03:36:11 +0000 2014",
  "id": {
    "$numberLong": "418224104609570816"
  },
  "text": "Happy New Year to our #Boulder community family & friends! We are grateful to begin another year in such an amazing city!",
  "hashtags": [
    "#Boulder"
  ],
  "user": {
    "id": 68291369,
    "name": "Highway",
    "screen_name": "HighwayNWDenver",
    "location": "Broomfield, CO",
    "description": "Highway Community Church is a non-denominational life-giving church on a journey with Jesus to reach the lost and unite His church. #sharethejourney",
    "followers_count": 628,
    "friends_count": 1549,
    "statuses_count": 2917
  },
  "sentiment": "Positive"
}

];

export default function TweetsList() {
  const [tweets, setTweets] = useState(initialTweets);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowingFavorites, setIsShowingFavorites] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(12);
  const itemsPerPage = 4;

  useEffect(() => {
    let filtered = tweets;

    if (searchQuery) {
      filtered = filtered.filter((tweet) =>
        tweet.text.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (isShowingFavorites) {
      filtered = filtered.filter((tweet) => favorites.includes(tweet.id.$numberLong));
    }

    setFilteredTweets(filtered);
    
  }, [tweets, searchQuery, isShowingFavorites, favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id.$numberLong) ? prev.filter((fav) => fav !== id.$numberLong) : [...prev, id.$numberLong]
    );
  };

  const loadMore = () => {
    const nextIndex = currentIndex + itemsPerPage;
    if (nextIndex >= filteredTweets.length) return;
    setCurrentIndex(nextIndex);
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <SearchBar placeholder="ابحث" onSearch={setSearchQuery} />
        <button
          onClick={() => setIsShowingFavorites(!isShowingFavorites)}
          style={{
            padding: "10px 20px",
            backgroundColor: isShowingFavorites ? "#007BFF" : "#F5F5F5",
            color: isShowingFavorites ? "#FFF" : "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isShowingFavorites ? "عرض الكل" : "عرض المفضلة"}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredTweets.slice(0, currentIndex).map((tweet) => (
          <TweetsCard
            key={tweet.id.$numberLong}
            tweet={tweet}
            isFavorite={favorites.includes(tweet.id.$numberLong)}
            onToggleFavorite={() => toggleFavorite(tweet.id)}
          />
        ))}
      </div>

      {currentIndex < filteredTweets.length && (
        <button
          onClick={loadMore}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          تحميل المزيد
        </button>
      )}

      
      <LocationInMap tweets={filteredTweets} />
     
    </div>
  );
}
