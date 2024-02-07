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

const sendHireDeveloperEmail = expressAsyncHandler(async (req, res) => {
  const { email,fullName,phone, technology } = req.body;
  console.log(email,fullName,phone, technology);

  var mailOptions = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: "Hire Developer Form",
    text: `${email} : ${fullName}  :${phone} :${technology}`,

  };  

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendHireDeveloperEmail };
