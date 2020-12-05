const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// eslint-disable-next-line import/no-unresolved
const mongoose = require('mongoose');
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

// Define API routes here
const stateGuidelines = require("./data/covid-state-data");

app.get("/api/stateGuidlines/:state", function(req, res) {
    var chosen = req.params.state;

    for (var i = 0; i < stateGuidlines.length; i++) {
      if (chosen === stateGuidelines[i].stateName) {
        return res.json(stateGuidelines[i]);
      }
    }
  
    return res.json(false);
  });

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
