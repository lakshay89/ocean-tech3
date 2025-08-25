import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.hostinger.com
      port: Number(process.env.SMTP_PORT) || 465, // Hostinger prefers 465
      secure: true, // ✅ Required for port 465
      auth: {
        user: process.env.SMTP_USER, // info@oceantechzone.com
        pass: process.env.SMTP_PASS, // your actual Hostinger email password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // ✅ must be your SMTP user (not random email)
      to: process.env.SMTP_TO, // where the mail should land
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
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
