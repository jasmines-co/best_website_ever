import auth0 from 'auth0-js';
//making cookies
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';


class Auth0 {

  constructor(){
    this.auth0 = new auth0.WebAuth({
      domain: 'toshi-text.auth0.com',
      clientID: 'z5UssdBfYc7R5OOEPBprycmfXrcKIxD1',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    })
  }  

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    // this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  
  }

  logout(){
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: '',
      clientID: 'z5UssdBfYc7R5OOEPBprycmfXrcKIxD1'
    })
  }

  login(){
    this.auth0.authorize();
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }

  // verifyToken(token){
  //   if(token){
  //     const decodedToken = jwt.decode(token);
  //     const expiresAt = decodedToken.exp * 1000;

  //     return (decodedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
  //   }
  //   return undefined;
  // }

  clientAuth(){
    return this.isAuthenticated();
    // const token = Cookies.getJSON('jwt');
    // const verifiedToken = this.verifyToken(token);

    // return token;
  }

  serverAuth(req){
    if (req.headers.cookie){
      const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt'));
  
      if (!expiresAtCookie) { return undefined };

      const expiresAt = expiresAtCookie.split('=')[1];

      // const cookies = req.headers.cookie;
      // console.log(cookies);
      // const splittedCookies = cookies.split(';')
      // console.log(splittedCookies);
      // const expiresAtCookie = splittedCookies.find(c => c.trim().startsWith('expiresAt='));
      // console.log(expiresAtCookie);
      // const expiresAtArray = expiresAtCookie.split('=')[1];
      // console.log(expiresAtArray);
      // const expiresAt = expiresAtArray[1];
      // console.log(expiresAt);
      // const verifiedToken = this.verifyToken(token);

      return new Date().getTime() < expiresAt;
    }
    // return undefined
  }
}

const auth0Client = new Auth0(); 

export default auth0Client;