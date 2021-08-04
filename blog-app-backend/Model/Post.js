const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        default: "Dogukan GULYASAR"
    }
})

module.exports = mongoose.model("Post", PostSchema);