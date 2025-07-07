const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", coursesSchema);
module.exports = Course;
