const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'sendinblue',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDINBLUE_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `Cyrus from DesignFlow ${process.env.SENDER_EMAIL}`,
    to: options.to,
    subject: options.subject,
    html: options.html,
  });
};

module.exports = sendEmail;
