// Import required modules.
const express = require("express");
const cors = require("cors"); // Import CORS middleware for handling cross-origin requests.
const { MongoClient } = require("mongodb");

// Initialize the Express application.
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URL and client setup.
const dbUrl = "mongodb+srv://DishaKolapate:kQfFrsMGPEyhYDgn@cluster0.qateupq.mongodb.net/"; // MongoDB connection string.
const client = new MongoClient(dbUrl);

// Middleware setup.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" })); // Enable CORS for all origins.

// API Endpoints.

// Endpoint to get projects.
app.get("/api/projects", async (request, response) => {
  let projects = await getProjects(); // Fetch projects from the database.
  response.json(projects);
});

// Endpoint to get skills.
app.get("/api/skills", async (request, response) => {
  let skills = await getSkills();
  response.json(skills); // Send the skills as a JSON response.
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// MongoDB Functions

// Function to establish a connection to the database.
async function connection() {
  await client.connect();
  const db = client.db("portfolioDB");
  return db;
}

// Function to retrieve projects from the database.
async function getProjects() {
  const db = await connection();
  const results = db.collection("projects").find({});
  return await results.toArray();
}

// Function to retrieve skills from the database.
async function getSkills() {
  const db = await connection();
  const results = db.collection("skills").find({});
  return await results.toArray();
}
