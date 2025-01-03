# TweetStream Web Application

## **Overview**
This project connects a web app to a MongoDB database using Mongoose. Data is fetched dynamically from the database. The project includes features like cards, favorites, search, charts, and interactive data display.

---
## **Features**
1. **Database Connection:**
   - The application connects to a MongoDB database hosted on Atlas.
   - Instead of using hardcoded arrays, data is dynamically fetched from the database.
2. **Dynamic UI Components:**
   - **Tweet Cards:** Displays tweet data nicely with details like text, users, and locations.
   - **Favorites:** Allows users to add tweets to a favorites list or remove them.

3. **Interactive Charts:**
   - **Sentiment Analysis Chart:** Shows tweet sentiments (positive, negative, or neutral) in a chart.
   - **Trend Chart:** Displays the number of tweets per day in a chart to show trends.

4. **Search Functionality:**
   - Users can search for tweets using keywords.

5. **API Endpoint:**
   - An API endpoint is available at:
     ```
     http://localhost:5000/api/tweets
     ```
   - It fetches all tweets stored in the database.

3. **Development Commands:**
   - To start the frontend:
     ```bash
     npm run dev
     ```
   - To start the backend server:
     ```bash
     npx nodemon server.js
     ```

---

## **Database Connection**
To connect to the database, use the following credentials:

- **Username:** marah4saadeh
- **Password:** T3T3PCAitM5T5Vih
- **Connection String:**
  ```bash
  mongodb+srv://marah4saadeh:T3T3PCAitM5T5Vih@cluster0.e8qpm.mongodb.net/TweetDB
  ```

### **Key Components:**
1. **TweetsCard:**
   - A component that shows tweet details with the option to add it to favorites.
   - Displays text, users, locations, and sentiments.

2. **SearchBar:**
   - A search bar that lets users type keywords to filter tweets.

3. **TrendChart:**
   - A chart that shows the number of tweets per day interactively.

4. **SentimentChart:**
   - A chart that analyzes tweet sentiments and displays the results.

5. **TweetsList:**
   - The main component that fetches data from the API and displays it using TweetsCard, integrating all features.

---

## **Setting Up the Environment**
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend server:
   ```bash
   npx nodemon server.js
   ```

3. Start the frontend application:
   ```bash
   npm run dev
   ```

---

