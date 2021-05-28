const express = require("express");
const { get } = require("mongoose");
const { deleteOne, remove } = require("../models/Post.js");
const router = express.Router();
const Post = require("../models/Post.js");

// const postController = require("../controllers/postController");

// const { myPost, getPost } = postController;

//getAll post
router.get('/', async (req, res) => {
  try{
   const posts = await Post.find();
   res.json(posts);
  } catch(err) {
    res.status(404)
    .json({message: err})
  }
});
//submit a post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  try{
    const savePost = await post.save();
    res.json(savePost);

  } catch (err) {
    res.json({message: err})
  }

});

//specific post
 router.get('/:postId', async (req, res) => {
   try{

   const posts = await Post.findById(req.params.postId);
   res.json(posts);

   } catch(err){
     res.json({ message: err});
   }


});

router.delete('/:postId', async (req, res) =>{
  try{
    const removePost = await Post.remove({_id:req.params.postId });
    res.json(removePost);
  } catch(err) {
    res.json({ message: err});
  }
})
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPosted = await Post.updateOne({ _id: req.params.postId},
      { $set: { title: req.body.title } }
    );
    res.json(updatedPosted);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
