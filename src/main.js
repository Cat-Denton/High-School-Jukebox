import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpotifyService from './spotify-service.js';

async function testToken() {
  const token = await SpotifyService.getToken();
  return token
}

async function testSearch() {
  const token = await testToken();
  const search = await SpotifyService.getSearch(token);
  // console.log(search)
  // debugger
  search.tracks.items.forEach(function(element) {
    $("#songList").append("<li>" + element.name)
  })
}

testSearch();

// $("#songList").html(output.items[0]);




