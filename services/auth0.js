// src/Auth/Auth.js

import auth0 from 'auth0-js';

class Auth0 {

    //make auth0-https://auth0.com/
  constructor() {
    this.auth0 = new auth0.WebAuth({
        domain: 'toshi-text.auth0.com',
        clientID: 'z5UssdBfYc7R5OOEPBprycmfXrcKIxD1',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile'
      });

      this.login = this.login.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
  }
//need to use the created token
  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }
  //needed to create a session, save info
  setSession(){
      
  }

  login() {
    this.auth0.authorize();
  }
}

const auth0Client = new Auth0();
export default auth0Client;