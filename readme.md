*Requirements:
Make a Node.js app that depends on user input from the command line
Integrate Spotify, and OMDb APIs via the appropriate NPM modules
Use API calls and parse through returned JSON objects, outputting them in a specified format
Read commands and queries from file.

Technologies Used:
Node.js
JavaScript
Spotify API 
OMDb API 
bandintown API
Code Explanation:
Authentication keys for spotify are stored in "keys.js", and we are exporting its contents to the main "liri.js" file.
What our app does depends on what the user types, and there are 3 main functions: 
(1) Spotify lookup for a song, (2) OMDb lookup for a movie, and (3) bandintown lookup for a concert.
(4)whaterver read anything you put in.
The program also makes a request to the Spotify API,OMDB APT and bandintown API and we get back a JSON object that includes info about type of request we made. 

Here is info we got for Bandtown API:

![Bandtown API](https://github.com/helenkhoda2019/liri-node-app/blob/master/concert.png)






Here is info we got for OMDB API:
![OMDB API](https://github.com/helenkhoda2019/liri-node-app/blob/master/movie.png)










Here is info we got for spotify API:
![spotify API](https://github.com/helenkhoda2019/liri-node-app/blob/master/spotify.png)



Here is info we got for whatever API:
![spotify API](https://github.com/helenkhoda2019/liri-node-app/blob/master/whatever.png)



