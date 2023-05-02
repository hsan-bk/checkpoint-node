const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'myemail@gmail.com',
      pass: 'mypassword'
    }
  });

// Create a mailOptions object
var mailOptions = {
  from: 'myemail@gmail.com',
  to: 'sencondemail@yahoo.com',
  subject: 'Test Email with node',
  text: 'Hello, this is a test email with node!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
