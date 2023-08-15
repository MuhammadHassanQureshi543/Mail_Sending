const nodemailer = require('nodemailer');

exports.creatUser = async(req,res,next)=>{
    const { name, email, message } = req.body;

    // Validate the user input (add more validation as per your requirements)
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }
  
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Specify your email service provider
      service: 'Gmail',
      auth: {
        user: 'muhammadhassanqureshi987@gmail.com', // Replace with your email address
        pass: 'jouggcccrpqkmsuu' // Replace with your email password or generate an app password
      }
    });
  
    // Compose the email
    const mailOptions = {
      from: email,
      to: 'muhammadhassanqureshi987@gmail.com', // Replace with the admin's email address
      subject: 'New message from your API',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while sending the email' });
      }
      console.log('Email sent:', info.response);
      res.json({ success: true });
    });
  };

exports.working = async(req,res,next)=>{
  res.send("<h1>Working</h1>")
}