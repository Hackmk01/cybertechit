import nodemailer from "nodemailer";

export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { nombre, email, telefono, mensaje } = data;

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: context.env.ZOHO_USER, 
        pass: context.env.ZOHO_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${context.env.ZOHO_USER}>`,
      to: "soporte@cibertechit.cl",
      cc: "jorge.quilodran@cibertechit.cl",
      subject: `Nuevo mensaje desde la web - ${nombre}`,
      text: `
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje}
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Correo enviado correctamente" }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
