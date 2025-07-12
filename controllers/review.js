const router = require("express").Router();
const Review = require("../models/review");
const Course = require("../models/course");
const User = require("../models/user");

router.get("/courses/:id/review", async (req, res) => {
  const courseId = req.params.id;
  const course = await Course.findById(courseId);
  const reviews = await Review.find({ course: courseId })
    .populate("user")
    .populate("course");

  res.render("reviews.ejs", { course, reviews });
});
module.exports = router;
