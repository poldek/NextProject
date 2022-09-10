import nodemailer from "nodemailer";

export default async function Contact(req, res) {
  const { data } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER,
      to: "grekawek@ganso.pl",
      subject: `Contact form PGMSOFT LTD `,
      html: `<p><h1>You have a new contact</h1></p><br>
        <p><strong>Email: ${data.contactForm.email}</strong> </p><br>
        <p><strong>Message: ${data.contactForm.message}</strong> </p><br>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ success: data.contactForm.message });
}
