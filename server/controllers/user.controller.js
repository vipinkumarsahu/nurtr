const nodemailer = require("nodemailer");

module.exports.sendEmail = function(req, res){
    let mailer = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "vipin.trancis@gmail.com",
            pass: "trancis@123"
        }
    });
   
    let useremail = req.body.email;
    let mailOptions = {
        to: useremail,
        subject: "Please confirm your Email account",
        html: "Hello,<br> Please Click on the link to verify your email.<br>"
    }
    return mailer.sendMail(mailOptions)    
}

function sendMail() {
    return new Promise((resolve, reject) => {
        mailer.sendMail(mailOptions, function (error, response) {
            if (error) {
                reject(error.message);
            } else {
                resolve("Message sent: " + response.message);
            }
        });
    })
}