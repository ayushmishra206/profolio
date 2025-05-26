import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateContactEmailTemplate } from './emailTemplates';

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
    const template = generateContactEmailTemplate(data);

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      replyTo: data.email,
      subject: template.subject,
      text: template.text,
      html: template.html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};