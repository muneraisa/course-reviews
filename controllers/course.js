const router = require("express").Router();
const Course = require("../models/course");

//read all index
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.render("index.ejs", { courses });
});

module.exports = router;
