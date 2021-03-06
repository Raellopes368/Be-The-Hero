const express = require('express');
const cors = require('cors');
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.security();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  security() {
    this.server.use((req, res, next) => {
      res.setHeader('X-Powered-By', 'PHP/7.1.7');
      next();
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
