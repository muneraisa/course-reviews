# 📚 CourseReviews App

![Home Page Screenshot](public/images/rev.png)

A full-stack Node.js application that allows users to browse courses and add reviews. Built using Express, MongoDB, Mongoose, EJS, and custom authentication logic.

## 🚀 Live Demo

[Click here to view the live app](https://course-reviews-z2m9.onrender.com/)

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

## 🔗 Project Resources

- 📋 **Trello Board** (Project Management):  
  [https://trello.com/b/your-board-id](https://trello.com/b/your-board-id)

- 🎨 **Figma Design** (UI/UX):  
  [https://www.figma.com/file/your-design-id](https://www.figma.com/file/your-design-id)

- 🧠 **ERD Diagram (Lucidchart)**:  
  [https://lucid.app/lucidchart/your-erd-link](https://lucid.app/lucidchart/your-erd-link)

## 📁 Project Structure

```bash
course-reviews/
├── controllers/
│   ├── course.js
│   └── review.js
├── models/
│   ├── course.js
│   ├── review.js
│   └── user.js
├── public/
│   └── stylesheets/
│       └── style.css
│   └── images/
├── views/
│   ├── index.ejs
│   ├── reviews.ejs
│   ├── add-review.ejs
│   ├── edit-review.ejs
├── middleware/
│   └── is-signed-in.js
├── server.js
└── README.md
```
