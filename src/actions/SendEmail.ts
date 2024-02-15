"use server";

import React from "react";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const SendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name, email, message);
  const to_name = "Arpit Kumar";

  const info = await transporter.sendMail({
    from: {
      name: to_name,
      address: process.env.USER_EMAIL,
    },
    to: process.env.USER_EMAIL,
    subject: `Question From ${name}`,
    html: `<p>Hello ${to_name},</p>
    <p>You got a new message from ${name} : ${email}</p>
    <p>${message}</p>`,
  });

  console.log("Message sent: %s", info.messageId);

  return;
};

export default SendEmail;
