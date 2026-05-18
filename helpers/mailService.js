const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "fahimrahmandipto7@gmail.com",
    pass: process.env.GMAIL_APP_PASS,
  },
});

const mailSender = async ({ email, subject, template }) => {
  try {
    await transporter.sendMail({
      from: '"E-Commerce Team" <team@ecommerce.com>',
      to: email,
      subject: subject,
      html: template,
    });
  } catch (error) {
    console.log("Error while sending mail", error);
  }
};

module.exports = { mailSender };