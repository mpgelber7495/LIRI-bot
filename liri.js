require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const dotEnv = require("dotenv");
var keys = require("./keys.js");

const [_, __, commandName, commandParam] = process.argv;

var spotify = new Spotify(keys.spotify);
