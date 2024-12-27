require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const achievementRouter = require("./routes/Achievement");
const blogRouter = require("./routes/Blog");
const PORT = process.env.PORT;
const DB = process.env.MONGO_URI;

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://init-website-dusky.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  

const corsOptions = {
  origin: ["https://init-website-dusky.vercel.app","https://init-website-dusky.vercel.app/achievements"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", achievementRouter);
app.use("/api", blogRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`live on http://localhost:${PORT}/api/`);
});
