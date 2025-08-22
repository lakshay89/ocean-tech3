import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    // Create transporter with server credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.SMTP_USER}>`, // fixed sender
      to: process.env.SMTP_TO,                              // your inbox
      subject: `New Inquiry from ${name}`,
      html: `
        <h3>New Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return new Response(JSON.stringify({ success: false, message: error.message || "SMTP error" }), { status: 500 });
  }
}
