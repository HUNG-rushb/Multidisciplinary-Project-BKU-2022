const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const TestRoutes = require('../routes/TestRoutes');
const cors = require('cors');

const ExpressApp = () => {
  //  initialize app
  const app = express();
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //   app.use('/api/users', require('./routes/api/users'));
  // ! THIS IS FOR TESTING PURPOSE
  app.use('/api', TestRoutes);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../webclient/build')));
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../webclient/build', 'index.html'));
    });
  }

  return app;
};
module.exports = ExpressApp;
