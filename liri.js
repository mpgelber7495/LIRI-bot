require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const dotEnv = require("dotenv");
var keys = require("./keys.js");

const [_, __, commandName, commandParam] = process.argv;

const Spotify = require("node-spotify-api");
const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
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
    spotify.search({ type: "track", query: song }, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      let artistName = data["tracks"]["items"][0]["artists"][0]["name"];
      let songName = data["tracks"]["items"][0]["name"];
      let URLs = data["tracks"]["items"][0]["external_urls"]["spotify"];
      let album = data["tracks"]["items"][0]["album"]["name"];
      console.log(
        `Here's some info on ${songName}: \n\t Artist: ${artistName} \n\t Album: ${album}\n\t Preview: ${URLs}`
      );
    });
    break;
  case "movie-this":
    let movie = commandParam;
    const apiURL = `http://www.omdbapi.com/?t=${movie}&type=movie&apikey=trilogy&`;
    axios(apiURL).then(res => {
      let data = res.data;
      let title = data.Title;
      let year = data.Year;
      function findValue(arr, key) {
        return arr.find(function(o) {
          return o.Source === key;
        }).Value;
      }

      let IMDBRating = findValue(data.Ratings, "Internet Movie Database");
      let RTRating = findValue(data.Ratings, "Rotten Tomatoes");
      let country = data.Country;
      let language = data.Language;
      let plot = data.Plot;
      let actors = data.Actors;
      console.log(
        `Here's your info on ${title}:\n\tYear: ${year}\n\tIMDB Rating: ${IMDBRating}\n\tRotten Tomatoes Rating: ${RTRating}\n\tCountry: ${country}\n\tLanguage: ${language}\n\tPlot: ${plot}\n\tActors: ${actors}`
      );
    });

    break;
  case "do-what-it-says":
    break;
  default:
}
