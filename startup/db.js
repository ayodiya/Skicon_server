const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const winston = require('winston');

const connectDB = async () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => winston.info(`connected to ${db}`));
};

module.exports = connectDB;
