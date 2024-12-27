require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const achievementRouter = require("./routes/Achievement");
const blogRouter = require("./routes/Blog");
const PORT = process.env.PORT
const DB = process.env.MONGO_URI

const app = express()

app.use(cors({
    origin: 'https://init-website-backend.vercel.app/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(express.json())
app.use('/api',achievementRouter)
app.use('/api',blogRouter)

mongoose.connect(DB).then(() => {
    console.log('connected to mongodb')
}).catch(err => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`live on http://localhost:${PORT}/api/`);
})

