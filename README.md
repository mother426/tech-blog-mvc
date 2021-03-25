# Tech Blog MVC

This project is a tech-blog app made with express and node.js. 

The app uses express backend and SQL database to allow users to sign up for an account on the app, and login. User data is saved and passwords are hashed upon profile creation, and when logging in user passwords are checked against the hashed password to allow secure password entry. 

![Tech blog login/signup](/Assets/techblogsignup.png)

When first landing on the site, the user is prompted to sign up or login if they already have created a profile. 

![Tech blog site](/Assets/techblogprofile.png)

After logging in, or if you are already logged in, users are directed to the profile page, on this page they can delete their current posts, or create a new post. 

![Tech blog Home page](/Assets/techblog.png)

On the home page, if a user is logged in they are able to view all posts that have been posted to the app. 

![Tech blog comments](/Assets/techblogpostandcomment.png)

Users are able to comment on a particular post, and previous comments for that post will be displayed below the post. 

## Installation and Usage

This project can be viewed and demo'd at [this live link](https://tech-blog-mvc-14.herokuapp.com/) hosted on heroku. 
## Technologies Used in this project 

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [JavaScript](https://www.javascript.com/)
- [Handlebars.js](https://handlebarsjs.com/)