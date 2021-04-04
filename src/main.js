import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpotifyService from './spotify-service.js';

$("#input-form").submit(function(event) {
  const birthDate = $("#DOB").val();
  const birthYear = parseInt(birthDate.slice(0,4));
  const hsYears = [(birthYear)+14,(birthYear)+18];
  const genre = $("#inputGenre").val()
  outputSearch(genre,hsYears)
  event.preventDefault();
})

async function testToken() {
  const token = await SpotifyService.getToken();
  return token
}

async function outputSearch(genre,years) {
  const token = await testToken();
  const search = await SpotifyService.getSearch(token,genre,years);
  // debugger
  search.tracks.items.forEach(function(element) {
    $("#songList").append("<li>" + element.name)
  })
}






