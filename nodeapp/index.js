const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

const dbUrl = "mongodb+srv://DishaKolapate:kQfFrsMGPEyhYDgn@cluster0.qateupq.mongodb.net/";
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

// API Endpoints
app.get("/api/projects", async (request, response) => {
  let projects = await getProjects();
  response.json(projects);
});

app.get("/api/skills", async (request, response) => {
  let skills = await getSkills();
  response.json(skills);
});

// Start Server
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// MongoDB Functions
async function connection() {
  await client.connect();
  const db = client.db("portfolioDB");
  return db;
}

async function getProjects() {
  const db = await connection();
  const results = db.collection("projects").find({});
  return await results.toArray();
}

async function getSkills() {
  const db = await connection();
  const results = db.collection("skills").find({});
  return await results.toArray();
}
