const mongoose = require("mongoose");

// Set up Project Schema and Model
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgPath: String,
  ghLink: String,
});

const Project = mongoose.model("Project", projectSchema);

// Set up Skill Schema and Model
const skillSchema = new mongoose.Schema({
  name: String,
  icon: String,
});

const Skill = mongoose.model("Skill", skillSchema);

// Export the models
module.exports = {
  Project,
  Skill,
};
