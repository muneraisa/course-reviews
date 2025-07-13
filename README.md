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
  [Board](https://trello.com/b/SvJZw9hY/course-reviews-ga)

- 🎨 **Figma Design** (UI/UX):  
  [Design](https://www.figma.com/design/tciQOMYKZr1OVecsBzkIzm/CourseReviews-GAU2?node-id=0-1&t=9QnkWKoGJaR2inGe-1)

- 🧠 **ERD Diagram (Lucidchart)**:  
  [ERD](https://lucid.app/lucidchart/cf667b30-f018-469b-9e95-1f8594f11fed/edit?viewport_loc=68%2C-76%2C2028%2C939%2C0_0&invitationId=inv_55cb0ea8-e24f-4d69-b1b3-919398d5dd65)

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
