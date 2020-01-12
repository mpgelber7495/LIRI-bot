require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const dotEnv = require("dotenv");
var keys = require("./keys.js");

const [_, __, commandName, commandParam] = process.argv;

var spotify = new Spotify(keys.spotify);
switch (commandName) {
  case "concert-this":
    let artist = commandParam;
    const queryURL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";

    axios(queryURL.then());
    break;
  case "spotify-this-song":
    let song = commandParam;
    break;
  case "movie-this":
    let movie = commandParam;
    break;
  case "do-what-it-says":
    break;
  default:
}
