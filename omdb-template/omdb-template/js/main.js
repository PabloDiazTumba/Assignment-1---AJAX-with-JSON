/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */


/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=series
*
*/
// let url = 'http://www.omdbapi.com/?apikey=[yourkey]=star trek';

let data;
function getanswer(q){
$.get("https://www.omdbapi.com/?s="+q+"&apikey=554a7881", function(rawdata){
let rawstring = JSON.stringify(rawdata);
data = JSON.parse(rawstring);
let title = data.Search[0].Title;
let year = data.Search[0].Year; 
let imdburl = "https://www.imdb.com/title/"+data.Search[0].imdbID+"/";

let posterurl = data.Search[0].Poster;
document.getElementById('answer').innerHTML="<h1>" +title+ "</h1><br> <img src= '" +posterurl+ "'><br><p> Year Released: " +year+ "</p> <br> <p> IMDB page: <a href='" +imdburl+ "'target='_blank'>" +imdburl+ "</a></p>"; }); }
