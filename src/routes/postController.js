const express = require("express")
const router = express.Router()

const mongoose = require("mongoose")

require("../models/Post")
const Post = mongoose.model("posts")

router.get("/", async(req, res) => {

    try {

        const list = await Post.find()

        res.json(list)

    } catch {
        return res.status(400).json("Error")
    }

})

router.get("/:postId", async(req, res) => {

    try {

        const listOne = await Post.findOne({_id: req.params.postId})

        res.json({listOne})

    } catch {

        return res.status(400).json("Error")

    }
})

router.post("/create", async(req, res) => {

    try {

        const {title, description} = req.body

        const createPost = await Post.create({ title, description })

        res.json({ createPost })

    } catch(err) {

        return res.status(400).json("Error")

    }

})

router.put("/edit/:postId", async(req, res) => {

    try {

        const {title, description} = req.body

        const edit = await Post.findByIdAndUpdate({ _id: req.params.postId}, {
            title,
            description
        }, {new: true})

        res.json({edit})

    } catch {
        
        return res.status(400).json("Error")

    }

})

router.delete("/delete/:deleteId", async(req, res) => {

    try {

        const deletePost = await Post.findByIdAndDelete({_id: req.params.deleteId})

        res.json({deletePost})

    } catch {

        return res.status(400).json("Error")

    }

})


module.exports = router

