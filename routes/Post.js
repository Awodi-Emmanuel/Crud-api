const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const Post = require("../models/Post.js");

// const postController = require("../controllers/postController");

// const { myPost, getPost } = postController;

router.post("/posts", (res, req) => {
  res.status(201).json({
    message: "We're on post",
  });
});
router.post("", (res, req) => {
  const post = new Post();
});

// router.get('post/id', getPost);

module.exports = router;
