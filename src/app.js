require("dotenv").config()

const express = require("express")
const app = express()

const bodyParser = require("body-parser")

const mongoose = require("mongoose")
const cors = require("cors")

const Post = require("./routes/postController")

//Configs
    app.use(express.json())

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(cors())

mongoose.connect(
    process.env.MONGO_URL || 'mongodb://localhost/consumeApi' ,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/post", Post)

app.listen(process.env.PORT || 6767, () => console.log("Server running..."))