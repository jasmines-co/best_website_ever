import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'toshi-text.auth0.com',
    clientID: 'z5UssdBfYc7R5OOEPBprycmfXrcKIxD1',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor(){

  }
  login(){
    this.auth0.authorize();
  }
}