require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const dotEnv = require("dotenv");
var keys = require("./keys.js");

const [_, __, commandName, commandParam] = process.argv;

const Spotify = require("node-spotify-api");
const spotifyUser = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: "track", query: "All the Small Things" }, function(
  err,
  data
) {
  if (err) {
    return console.log("Error occurred: " + err);
  }

  console.log(data);
});
switch (commandName) {
  case "concert-this":
    let artist = commandParam;
    const queryURL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=codingbootcamp";

    axios(queryURL)
      .then(resp => {
        let data = resp.data;
        let venues = [];
        console.log(`Looks like ${artist} is playing the following shows:`);
        for (let i = 0; i < data.length; i++) {
          console.log(`${data[i]["venue"]["name"]}`);
          console.log(`\tIn ${data[i]["venue"]["city"]}`);
          console.log(`\tOn ${data[i]["datetime"]}`);
        }
        console.log(venues);
      })
      .catch(err => console.log(err));
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
