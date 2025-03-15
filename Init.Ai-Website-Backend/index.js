require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const achievementRouter = require("./routes/Achievement");
const blogRouter = require("./routes/Blog");
const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_URI;

const app = express();

app.use(
  cors({
    origin: ["https://www.djinitai.com"], // Allow your frontend domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", achievementRouter);
app.use("/api", blogRouter);

app.options("*", cors());

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Live on http://localhost:${PORT}/api/`);
});
