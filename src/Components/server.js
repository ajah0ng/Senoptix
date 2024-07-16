// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
const port = 5000;

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, fromEmail, userType, message } = req.body;

  const msg = {
    to: 'info@senoptix.com',
    from: fromEmail,
    subject: `Contact Us Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${fromEmail}\nUser Type: ${userType}\nMessage: ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email sent');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
