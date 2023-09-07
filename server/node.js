const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve your HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { fullName, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'YourEmailService', // e.g., 'Gmail' or use your SMTP settings
        auth: {
            user: 'your@email.com',
            pass: 'yourpassword',
        },
    });

    // Email data
    const mailOptions = {
        from: 'your@email.com',
        to: 'recipient@email.com',
        subject: 'Contact Form Submission',
        text: `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error: Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully.');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});