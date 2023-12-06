const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware untuk mengurai body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route untuk mengirim email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Konfigurasi transporter untuk mengirim email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  // Konfigurasi email yang akan dikirim
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'New Message from Contact Form',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Mengirim email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
