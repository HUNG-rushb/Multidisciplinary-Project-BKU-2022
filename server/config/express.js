const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const thoughtRoutes = require('../routes/thoughtRoutes');
const cors = require('cors');

const ExpressApp = () => {
  //  initialize app
  const app = express();
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  //   app.use('/api/users', require('./routes/api/users'));
  app.use('/api/thought', thoughtRoutes);
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/build')));
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
  }

  return app;
};
module.exports = ExpressApp;