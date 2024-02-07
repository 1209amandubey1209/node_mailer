const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendCareerEmail = expressAsyncHandler(async (req, res) => {
  const { email,firstName,lastName,phone, course } = req.body;
  console.log(email,firstName,lastName,phone, course);

  var mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: "CareerForm",
    text: `${email} : ${firstName} ${lastName} :${phone} :${course}`,

  };  

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendCareerEmail };
