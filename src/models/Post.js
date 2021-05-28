const mongoose = require("mongoose")

const newPost = new mongoose.Schema({

    title: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    content: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now()
    }

})

mongoose.model("posts", newPost)

