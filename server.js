const express = require('express');
const next = require('next');
const path = require('path');
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

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

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