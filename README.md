# 📚 CourseReviews App

![Home Page Screenshot](public/images/rev.png)

A full-stack Node.js application that allows users to browse courses and add reviews. Built using Express, MongoDB, Mongoose, EJS, and custom authentication logic.

## ✨ Features

- 📝 List of courses with title, instructor, description, and images
- 👤 User authentication with session handling
- ⭐ Add, edit, and delete reviews (only by the logged-in reviewer)
- 🛡️ Protected routes (only signed-in users can add/edit/delete)
- 🖼️ Clean and responsive UI styled with custom CSS
- 📦 Modular structure with MVC pattern

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS (Embedded JavaScript Templating)
- Express-session (for login session management)

## 📁 Project Structure
course-reviews/
├── controllers/
│ ├── course.js
│ └── review.js
├── models/
│ ├── course.js
│ ├── review.js
│ └── user.js
├── public/
│ └── stylesheets/
│ └── style.css
│ └── images/
├── views/
│ ├── index.ejs
│ ├── reviews.ejs
│ ├── add-review.ejs
│ ├── edit-review.ejs
├── middleware/
│ └── is-signed-in.js
├── server.js
└── README.md