interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
}

export const generateContactEmailTemplate = (data: ContactEmailData) => {
  const subject = data.subject || 'New Contact';
  const projectType = data.projectType || 'General Inquiry';

  return {
    subject: `Portfolio Inquiry: ${subject}`,
    text: `
New Portfolio Contact Inquiry

From: ${data.name}
Email: ${data.email}
Project Type: ${projectType}
Subject: ${subject}

Message:
${data.message}

---
Sent from Portfolio Contact Form
    `.trim(),
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Portfolio Contact Inquiry</h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>

        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <h3 style="color: #334155; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>

        <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 14px;">Sent from Portfolio Contact Form</p>
      </div>
    `
  };
};