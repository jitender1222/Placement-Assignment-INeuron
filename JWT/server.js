const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Create a secret key for signing JWT tokens
const secret = "your-secret-key";

// Create a middleware that checks if the user is authenticated
const isAuthenticated = (req, res, next) => {
  // Check if the user is authenticated
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).send("Unauthorized");
      } else {
        req.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).send("Unauthorized");
  }
};

// Sample in-memory user storage (replace this with your database implementation)
const users = [];

// Create a route for logging in
app.post("/login", (req, res) => {
  // Check if the username and password are correct
  if (req.body.username === "username" && req.body.password === "password") {
    // Create a JWT token for the user
    const token = jwt.sign({ username: req.body.username }, secret);

    // Set the JWT token in the response cookie
    res.cookie("jwt", token);

    // Redirect the user to the home page
    res.redirect("/");
  } else {
    // The username or password is incorrect, so return an error
    res.status(401).send("Invalid username or password");
  }
});

// Create a route for signing up
app.post("/signup", (req, res) => {
  // Check if the username is already taken
  if (users.find((user) => user.username === req.body.username)) {
    // The username is already taken, so return an error
    res.status(400).send("Username already taken");
  } else {
    // Create a new user
    const user = {
      username: req.body.username,
      password: req.body.password,
    };

    // Save the user to the database
    users.push(user);

    // Create a JWT token for the user
    const token = jwt.sign({ username: user.username }, secret);

    // Set the JWT token in the response cookie
    res.cookie("jwt", token);

    // Redirect the user to the home page
    res.redirect("/");
  }
});

// Create a route for getting the user's information
app.get("/me", isAuthenticated, (req, res) => {
  // Get the user from the database
  const user = users.find((user) => user.username === req.user.username);

  // Send the user's information to the client
  res.json(user);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started");
});
