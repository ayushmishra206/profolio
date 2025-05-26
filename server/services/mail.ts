import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MAIL_USER || !process.env.MAIL_APP_PASSWORD) {
  throw new Error('Missing email configuration');
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.MAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendMail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
}) => {
  try {
    const message = `
Name: ${data.name}
Email: ${data.email}
Project Type: ${data.projectType || 'Not specified'}

Message:
${data.message}
    `;

    const mailOptions = {
      from: `"${data.name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact: ${data.subject}`,
      text: message,
      replyTo: data.email
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};