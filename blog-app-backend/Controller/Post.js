const Post = require("../Model/Post");

exports.getAllPosts = async (req,res) => {
        try{
            const posts = await Post.find(); //Get all posts from Post model
            console.log("GHELDID")
            res.send(posts);
        }catch(err){
            console.log(err);
        }
}

exports.getPost = async(req,res) => {
    const {id} = req.params;
    try{
        const post = await Post.findById(id);
        res.send(post);
    }catch(err) {
        console.log(err);
    }
}

exports.addPost = async (req,res) => { //If you get timeout error then you need to go to mongodb network acces from browser and open access from everywhere
    const post = new Post (req.body);
    try{
        const savedPost = await post.save().catch(err => console.log(err));
        res.send(savedPost);
    }catch(err){
        console.log(err);
    }
    
}

exports.deletePost = async (req,res) => {
    const {id} = req.params;
    try{
        await Post.findByIdAndDelete(id);
        res.send("Deleted");
    }catch(err) {
        console.log(err);
    }
}

exports.patchPost = async (req,res) => {
    const {id} = req.params;
    const {newTitle, newDescription, newCategory} = req.body;
    try{
        const post = await Post.findByIdAndUpdate(id);
        newTitle ? post.title = newTitle : post.title;
        newDescription ? post.description = newDescription : post.description;
        newCategory ? post.category = newCategory : post.category;
        res.send("Updated");
    }catch(err){
        console.log(err);
    }
}