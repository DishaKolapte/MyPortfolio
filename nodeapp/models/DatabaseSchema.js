// Import Mongoose library for MongoDB object modeling.
const mongoose = require("mongoose");

// Set up Project Schema and Model.
// Define the schema for a project with the required fields.
const projectSchema = new mongoose.Schema({
  title: String, 
  description: String, 
  imgPath: String, 
  ghLink: String, 
});

// Create a Mongoose model for the Project schema.
const Project = mongoose.model("Project", projectSchema);

// Set up Skill Schema and Model.
// Define the schema for a skill with the required fields.
const skillSchema = new mongoose.Schema({
  name: String, 
  icon: String, 
});

// Create a Mongoose model for the Skill schema.
const Skill = mongoose.model("Skill", skillSchema);

// Export the models to make them available for other modules.
module.exports = {
  Project, 
  Skill, 
};
