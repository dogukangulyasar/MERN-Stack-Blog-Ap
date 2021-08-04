const express = require("express");
const router = express.Router();
const {getAllPosts, addPost, deletePost, patchPost, getPost} = require("../Controller/Post");

//For getting all posts in /posts
router.get("/", getAllPosts);

//Getting post with id
router.get("/:id", getPost);

//Posting single post to the database from /post
/**
 * POST body:
 * 
 * { //Minimum
 *  "title":"xx",
 *  "category":"xx"
 *  "description":"xx",
 * }
 * 
 * {
 *  "title":"xx",
 *  "category":"xx"
 *  "description":"xx",
 *  "imageUrl": "xx",
 *  "date":Date.xx,
 *  "author":"xx"
 * }
 * 
 */
router.post("/", addPost);

//Deleting post
router.delete("/:id", deletePost);

//Patching (updating post)
router.patch("/:id", patchPost);
module.exports = router;