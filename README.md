# TweetStream Web Application

## **Overview**
This project connects a web application to a MongoDB database using Mongoose. The data is fetched from the database instead of a predefined array, and it includes routes for handling API requests.

---

## **Features**
1. **Database Connection:**
   - The application connects to a MongoDB database hosted on Atlas.
   - Instead of using hardcoded arrays, data is dynamically fetched from the database.

2. **API Endpoint:**
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

### **Setting Up the Environment**
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

