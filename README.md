<p align="center">
    <img src="static/dark-logo.png"
         width="200" />
</p>

# ToshiText

* [About ToshiText](https://github.com/jasmines-co/best_website_ever/tree/master#what-is-toshitext-)
* [The Team](https://github.com/jasmines-co/best_website_ever/tree/master#the-team)
* [Running](https://github.com/jasmines-co/best_website_ever/tree/master#running)
* [Testing](https://github.com/jasmines-co/best_website_ever/tree/master#testing)
* [Contact Info](https://github.com/jasmines-co/best_website_ever/tree/master#contact-info)

## What is ToshiText
Provides the ability to send blockchain payments via text message. This a class project developed by five students for the Software Professional Development(SPD) 1.3 at Make School in San Francisco, California

## Goal of ToshiText
To enable people of across the world to take control of their personal finances 

## Developers
### Jasmine Anderson
  - Role: Backend Engineer
  - Technologies: Node, Express, Handlebars, MongoDB
### Kendra Moore
  - Role: Frontend Engineer
  - Technologies: Node, Express, MongoDB, Next
### Sukrobjon Golibboev
  - Role: Backend Engineer
  - Technologies: Node, Express, MongoDB
### Fodé Diop
  - Role: Senior Backend Engineer
  - Technologies: Node, Express, MongoDB
### Jasmine Humbert
  - Role: Product Manager
  - Technologies: Node, Express, MongoDB, Google Cloud, Trello


## File Structure 
```
root/
|
|-- pages/              
|        |--index.js
|        |--request.js
|        |--wallet.js
|        |--team.js
         |--team.js
|
|-- routes/               
        |-- users.js
        |-- requests.js
|
|-- models/                     
      |-- Account.js
      |-- Request.js
      |-- User.js
|
|-- services/                     
      |--Auth0.js
|
|-- static/ 
      |--favicon/
            |-- favicon-small.png
      |-- images/
      
|-- config/                     
|     |-- dev.js
      |-- index.js
      |-- prod.js
      
|
|-- styles/                 
      |-- main.scss/
|
|-- env files                 
|-- server.js                
|-- next.config.js            
|-- env.config.js 
|-- .babelrc.js
|-- README.md
|-- misc
```

## Built With

* [Node](https://nodejs.org/en/) - Node
* [MongoDB](https://www.mongodb.com/) - Document based database
* [Next.js](https://nextjs.org/) - React framework for rendering server side apps

## API Integration - What APIs are we using? 
* [Twilio](https://www.twilio.com/) - Send text messages

### Documentation
[Documentation](https://jasmines-co.github.io/best_website_ever/) - Documentation

To learn more about our app visit our documentation site

### Installing

To beginning using the project, fork and clone the project
After cloning, start your database
After starting database, start you server

```
Git fork
Git clone best_website_ever
Mongod
npm run dev
```
## Deployment
To deploy to Heroku

```
git fork
git clone best_website_ever
mongod
npm run dev
git add .
git commit -m 'initial commit'
heroku create my-cool-app-name
git remote -v
heroku ps:scale web=1
heroku addons:create mongolab:sandbox
git push heroku master

```

## Running 
Live version - http://toshi-text.herokuapp.com/

## Authors


See also the list of [contributors](https://github.com/jasmines-co/best_website_ever) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



