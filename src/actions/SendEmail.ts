"use server";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const SendEmail = async (formData: FormData) => {
  try {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
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
    return {
      status: "success",
      message: "Successfully Sent",
    };
  } catch (error) {
    return {
      status: "failed",
      message: "Failed to send",
    };
  }
};

export default SendEmail;
