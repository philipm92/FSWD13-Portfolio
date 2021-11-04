require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const PORT = 3000;


app.use(function (req, res, next) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Origin', 'https://mahlberg.codefactory.live');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/', (req,res) => {res.send("Hello from server!")});
app.use(express.json());

app.post('/send-mail', (req, res) => {
  console.log(req.body, 'request was sent!');
  let transporter = nodemailer.createTransport({
    host: process.env.HOST, 
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: "philip.mahlberg@hotmail.com",
    replyTo: req.body.email,
    to: "philip.mahlberg@hotmail.com",
    subject: `PORTFOLIO CONTACT: ${req.body.name.toUpperCase()}`,
    date: new Date(),
    html: `<h4><em>Name:</em> ${req.body.name} <br /> <em>Phone:</em> ${req.body.phone}</h4> <p>${req.body.message}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({message: 'successfuly sent!'});
    }
  });

});

app.listen(PORT, () => { console.log(`server runs on PORT ${PORT}!!!`); });