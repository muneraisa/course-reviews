const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
app.use(express.static("public"));

// Middlewares
const mongoose = require("mongoose"); //databases
const methodOverride = require("method-override"); //update and delelte
const morgan = require("morgan"); // logs
const session = require("express-session"); //authentication

//these middlewares are required for the auth
const passUserToView = require("./middleware/pass-user-to-view");
const isSignedIn = require("./middleware/is-signed-in");

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));

// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));

// Morgan for logging HTTP requests
app.use(morgan("dev"));

// Session Configurations
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passUserToView);

// Require Controller
const authController = require("./controllers/auth");
app.use("/auth", authController);

const courseController = require("./controllers/course");
app.use("/", courseController);

const reviewController = require("./controllers/review");
app.use("/", isSignedIn, reviewController);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
