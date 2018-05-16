const express = require('express');
const router = express.Router();
const userController = require('./controllers/user.controller');

module.exports = function () {
    //video controller
    router.post('/sendEmail', userController.sendEmail);
      
    router.all('/', function (req, res) {
        console.log(req.baseUrl);
    })
    return router;
}