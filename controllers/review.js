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

  res.render("reviews.ejs", { course, reviews, user: req.session.user });

});

router.get("/courses/:id/review/add", async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.render("add-review.ejs", { course }); // you'll create this view
});

router.post("/courses/:id/review", async (req, res) => {
  const courseId = req.params.id;

  const userId = req.session.user?._id;

  if (!userId) {
    return res.redirect("/login");
  }

  await Review.create({
    course: courseId,
    user: userId,
    review: req.body.review,
  });

  res.redirect(`/courses/${courseId}/review`);
});

router.post("/reviews/:id/edit", async (req, res) => {
  const currentUser = req.session?.user;
  const review = await Review.findById(req.params.id);

  if (
    !review ||
    !currentUser ||
    review.user.toString() !== currentUser._id.toString()
  ) {
    return res.status(403).send("Unauthorized");
  }

  review.review = req.body.review;
  await review.save();

  res.redirect(`/courses/${review.course}/review`);
});

router.get("/reviews/:id/edit", async (req, res) => {
  const currentUser = req.session?.user;
  const review = await Review.findById(req.params.id).populate("course");

  if (
    !review ||
    !currentUser ||
    review.user.toString() !== currentUser._id.toString()
  ) {
    return res.status(403).send("Unauthorized");
  }

  res.render("edit-review.ejs", { review });
});

router.post("/reviews/:id/delete", async (req, res) => {
  const review = await Review.findById(req.params.id);

  if (!review || review.user.toString() !== req.session.user._id.toString()) {
    return res.status(403).send("Unauthorized");
  }

  await Review.findByIdAndDelete(req.params.id);
  res.redirect(`/courses/${review.course}/review`);
});

module.exports = router;
