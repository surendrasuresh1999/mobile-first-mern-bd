require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


// we can define multiple routes here
const userRoutes = require("./Routes/userRoutes");

// express app
const app = express();
app.use(cors());

// this function is used for receiving json data from the client
app.use(express.json());

// this function is used for middleware
app.use((req, res, next) => {
  next();
});

// access <routes></routes> based different route url
app.use("/api/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("mongoose connected successfully");
    // listen for requests
    app.listen(process.env.PORT || 3000, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
