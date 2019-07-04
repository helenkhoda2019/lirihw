require("dotenv").config();
var fs = require("fs");

var moment = require("moment");

var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

// for(var i = 3; i < process.argv.length; i++){
//   input += process.argv[i] + " ";
// }

//npm node-spotify-api
function spotifyThis() {


  spotify.search({ type: 'track', query: input }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    //song Name
    //Artist Name
    //Album Name
    //url to look for the son on spotify
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].artists[0].name)
    console.log(data.tracks.items[0].external_urls.spotify)
    console.log(data.tracks.items[0].album.name);
  });
}

function moviethis() {

  axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy")
    .then(function (response) {
      // handle success
      // var movieData = JSON.parse(response);
      //plot
      //actors
      //lenguage
      //year

      console.log("Movie name is " + response.data.Title);
      console.log("Movie year is " + response.data.Year);
      console.log("Movie actors are " + response.data.Actors);
      console.log("Movie language is " + response.data.Language);
      console.log("Movie language is " + response.data.Country);
      console.log("Movie language is " + response.data.Rated);
      console.log("Movie language is " + response.data.IMDB);



      // console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

}

function concertthis() {
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
    .then(function (response) {
      // console.log(response.data[0]);
      console.log("conccert date is  " + moment(response.data[0].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
      console.log("concert venue is " + response.data[0].venue.name);
      console.log("concert location is  " + response.data[0].venue.city);
      // 


      // console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always execut
    });

}


function liri() {
  if (command === 'spotify-this-song') {
    spotifyThis();
  } else if (command === 'movie-this') {
    moviethis();
  } else if (command === "concert-this") {
    concertthis();
  } else if (command === 'do-what-it-says') {

    fs.readFile("random.txt", "utf-8", function (error, data) {
      if (!error) {
         console.log("\n" + data);
          input=data
         dspotifyThis();

        //  if (data.search("I Want it That Way")) {
        //   var trackName = "I Want it That Way";
        //   console.log(spotifyThisSong(trackName));
        // }

      } else {
        console.log(error);
      }
    })


  }
}

liri();



