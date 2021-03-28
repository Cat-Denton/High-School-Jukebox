// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpotifyService from './spotify-service.js';

async function testToken() {
  return token = await SpotifyService.getToken();
}

let token = testToken();

async function testSearch(token) {
  const search = await SpotifyService.getSearch(token);
  console.log(token);
  return search   
}

testSearch(token);


