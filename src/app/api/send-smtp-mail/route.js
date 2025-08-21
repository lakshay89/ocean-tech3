import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { host, port, user, pass, to, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to,
      subject,
      html: `<p>${message}</p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
