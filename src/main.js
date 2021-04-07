import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpotifyService from './spotify-service.js';

window.onload = setTimeout(function() {
  $('.card-landing').fadeOut("slow");
 }, 1000 );



$(document).ready( async function() {
  const token = await testToken();
  const genreList = await SpotifyService.getGenres(token);
  genreList.genres.forEach(function(element){
    $("#inputGenre").append(`<option value=${element}>${element[0].toUpperCase() + element.substring(1)}</option>`);
  });
});
$("#input-form").submit(function(event) {
  clearFields();
  const birthDate = $("#DOB").val();
  const birthYear = parseInt(birthDate.slice(0,4));
  const hsYears = [(birthYear)+14,(birthYear)+18];
  const genre = $("#inputGenre").val();
  outputSearch(genre,hsYears);
  changeView();
  $('html,body').animate({
    scrollTop: $("#hiddenOutput").offset().top},
    'slow');
  event.preventDefault();
});

function changeView(){
  $("#hiddenInputs").hide();
  $("#hiddenOutput").show();
}

function getName(fullName){
  let array = fullName.split(/[ ,]+/);
  return array[0];
}
function clearFields() {
  $("#songList").text("");
}

async function testToken() {
  const token = await SpotifyService.getToken();
  return token;
}

async function outputSearch(genre,years) {
  const fullName = $("#name").val();
  let name = getName(fullName);
  const token = await testToken();
  const search = await SpotifyService.getSearch(token,genre,years);
  search.tracks.items.forEach(function(element) {
    $('.list').text(`Hello ${name}, here is a list of your personalized songs from high school:`);
    $("#songList").append("<li>" + " (" + element.album.release_date.slice(0,4) + ")" + "<br>" + ` <iframe src="https://open.spotify.com/embed/track/${element.id}" align="center" width="250" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`);
  });
} 


// + element.name + "-" + element.artists[0].name 


