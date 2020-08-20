require("dotenv").config();
require("./config/mongo");

const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const morgan = require("morgan"); // morgan est un logger
const app = express();

// POST SETUP
app.use(express.json());

// CORS SETUP
app.use(cors("*"));

// API CALL LOGGIN
app.use(morgan("dev"));

// SESSION SETUP
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 60000
    }, // in millisec
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    saveUninitialized: true,
    resave: true,
  })
);

app.get("/", (req, res) => res.send("hello :) my api is working"));

app.use("/ads", require("./routes/ads"));
app.use("/messages", require("./routes/messages"));
app.use("./nodemailler", require("./routes/nodemailler"));
app.use("/reports", require("./routes/reports"));
app.use("/reviews", require("./routes/reviews"));
app.use("/users", require("./routes/users"));




module.exports = app;