const express = require('express');
const next = require('next');
const dotenv = require('dotenv').config()
const path = require('path');
// const twilio = require('twilio');
//body-parser
const bodyParser = require("body-parser");
//logger
const morgan = require("morgan");
//cookier-parser
const cookieParser = require("cookie-parser");
//delete, edit
const methodOverride = require("method-override");
const cors = require("cors");
//SET UP MONGOOSE
const mongoose = require("mongoose");
const deepPopulate = require('mongoose-deep-populate')(mongoose);
// const MessagingResponse = require('twilio').twiml.MessagingResponse;
const http = require('http');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express();
  server.use(bodyParser.json());


// routes
const accountsController = require("./routes/accounts");


const usersController = require("./routes/user");


const requestController = require("./routes/request");


  //Twilio
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'Welcome to ToshiText',
//      from: process.env.phoneNumber,
//      to: process.env.TWILIO_NUMBER
//    })
//   .then(message => console.log(message.sid));


  //twilio
  // server.post('/sms', (req, res) => {
  //   const twiml = new MessagingResponse();
  
  //   twiml.message('How can I help you?');
  
  //   res.writeHead(200, {'Content-Type': 'text/xml'});
  //   res.end(twiml.toString());
  // });

  // server.post('/', (req, res) => {
  //   const twiml = new MessagingResponse();
  
  //   if (req.body.Body == 'Account') {
  //     twiml.message('You must create an account');
  //   } else if (req.body.Body == 'Balance') {
  //     twiml.message('You must create an account');
  //   } else {
  //     twiml.message(
  //       'No Body param match, Twilio sends this in the request to your server.'
  //     );
  //   }
  
  //   res.writeHead(200, { 'Content-Type': 'text/xml' });
  //   res.end(twiml.toString());
  // });
  
  

  const faviconOptions = {
    root: __dirname + '/static/'
  };
  server.get('/favicon.ico', (req, res) => (
    res.status(200).sendFile('favicon.ico', faviconOptions)
  ));

  server.get('*', (req, res) => {
    return handle(req, res)
  })


  const PORT = process.env.PORT || 3000;

  // Mongoose Connection
const mongoUri =
process.env.MONGODB_URI || "mongodb://localhost:27017/toshi";
mongoose.connect(
mongoUri,
{
  useNewUrlParser: true
}
);

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on port ' + PORT)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})