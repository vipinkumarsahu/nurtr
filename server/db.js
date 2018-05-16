const mongoose = require("mongoose");

// TODO: Set config Depending upon the Environment
const config = {
    dburl: 'mongodb://localhost:27017/test1'
}

try {
    mongoose.connect(config.dburl);
} catch (error) {
    console.log(error);
}

const db = mongoose.connection;

db.on('connected', function () {
    console.log('Mongoose default connection established.');
});

db.on('close', function () {
    console.log('Mongoose connection closed.');
});

// When the connection is disconnected
db.on('disconnected', function () {
    console.log('Mongoose default connection ended.');
});

module.exports.db = db;