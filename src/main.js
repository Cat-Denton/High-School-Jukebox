// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpotifyService from './spotify-service.js';

async function testToken() {
  const token = await SpotifyService.getToken();
  console.log(token);
}

testToken();

