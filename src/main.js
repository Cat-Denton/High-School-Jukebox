import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpotifyService from './spotify-service.js';

$("#input-form").submit(function(event) {
  clearFields();
  const birthDate = $("#DOB").val();
  const birthYear = parseInt(birthDate.slice(0,4));
  const hsYears = [(birthYear)+14,(birthYear)+18];
  const genre = $("#inputGenre").val()
  outputSearch(genre,hsYears)
  event.preventDefault();
})

function clearFields() {
  $("#songList").text("");
}

async function testToken() {
  const token = await SpotifyService.getToken();
  return token
}

async function outputSearch(genre,years) {
  const token = await testToken();
  const info = await SpotifyService.getInfo(token);
  info.categories.items.forEach(function(element){
    $("#inputGenre").append(`<option value=${element.id}>${element.id}</option>`)});
  const search = await SpotifyService.getSearch(token,genre,years);
  search.tracks.items.forEach(function(element) {
    $("#songList").append("<li>" + element.name)
  })
} 






