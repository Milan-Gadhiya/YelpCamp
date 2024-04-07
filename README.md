# YelpCamp

## Table of Contents
- [Introduction](#introduction)
- [Functionalities](#functionalities)
- [Launch](#launch)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Certificate](#certificate)

## Introduction
YelpCamp is a comprehensive full-stack project inspired by the popular website Yelp but tailored for campgrounds. It allows users to create, review, and explore campgrounds from all over. This project is a part of the web development bootcamp course by Colt Steele on Udemy. 

## Functionalities
- **Browse Campgrounds:** Everyone can view campgrounds and their reviews without needing to sign up or log in.
- **User Authentication:** Users must log in to create a new campground or to leave a review.
- **Edit and Delete:** Users can only edit or delete the campgrounds and comments that they have posted.
- **Persistence:** All user data, campground details, and comments are persistently stored in the Amazon cloud.

## Launch

### Setup
1. Install mongodb
2. Create a cloudinary account to get an API key and secret code

```bash
git clone https://github.com/Milan-Gadhiya/YelpCamp.git
cd yelpcamp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the followi

```bash
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run mongod in another terminal and node app.js in the terminal with the project.

Then go to localhost:3000.

## Screenshots
- **HomePage**
  ![HomePage](/public/stylesheets/home_page.png)

- **All Campgrounds**
  ![All Campgrounds](/public/stylesheets/camp_page.png)

- **Single Campground ShowPage**
  ![Single Campground ShowPage](/public/stylesheets/single_camp_page.png)  

- **Login & Register Page**
  ![Login & Register Page](/public/stylesheets/login_page.png)

## Technologies
- **HTML5:** The standard markup language for creating web pages.
- **CSS3:** Used for styling and designing the web pages.
- **Bootstrap:** A front-end framework for developing responsive and mobile-first websites.
- **jQuery:** A JavaScript library designed to simplify HTML DOM tree traversal and manipulation.
- **Node.js:** An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.
- **Express.js:** A web application framework for Node.js, designed for building web applications and APIs.
- **MongoDB:** A NoSQL database program, MongoDB uses JSON-like documents with schema.
- **PassportJS:** Authentication middleware for Node.js.
- **REST:** An architectural style for developing web services.
- **Data Associations:** Utilizes the reference method for associating user data with respective campgrounds and comments.
- **Heroku:** A cloud platform as a service supporting several programming languages.
- **AWS:** Amazon Web Services - used for hosting MongoDB on an EC2 instance.

## Certificate
  ![Certificate](/public/stylesheets/milan_cert.jpg)
