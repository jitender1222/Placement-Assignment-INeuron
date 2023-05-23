// Import required modules
const express = require("express");

// Create an instance of the Express server
const app = express();

// Define your array of posts
const posts = [
  { id: 1, title: "Post 1", content: "Content of post 1" },
  { id: 2, title: "Post 2", content: "Content of post 2" },
  { id: 3, title: "Post 3", content: "Content of post 3" },
  { id: 4, title: "Post 4", content: "Content of post 4" },
  { id: 5, title: "Post 5", content: "Content of post 5" },
  { id: 6, title: "Post 6", content: "Content of post 6" },
  { id: 7, title: "Post 7", content: "Content of post 7" },
  { id: 8, title: "Post 8", content: "Content of post 8" },
  { id: 9, title: "Post 9", content: "Content of post 9" },
  { id: 10, title: "Post 10", content: "Content of post 10" },
  { id: 11, title: "Post 11", content: "Content of post 11" },
  { id: 12, title: "Post 12", content: "Content of post 12" },
  { id: 13, title: "Post 13", content: "Content of post 13" },
  { id: 14, title: "Post 14", content: "Content of post 14" },
  { id: 15, title: "Post 15", content: "Content of post 15" },
  { id: 16, title: "Post 16", content: "Content of post 16" },
  { id: 17, title: "Post 17", content: "Content of post 17" },
  { id: 18, title: "Post 18", content: "Content of post 18" },
  { id: 19, title: "Post 19", content: "Content of post 19" },
  { id: 20, title: "Post 20", content: "Content of post 20" },
  // ... Add more posts as needed
];

// Define the '/post' endpoint
app.get("/post", (req, res) => {
  // Send the array of posts as a JSON response
  res.json(posts);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
