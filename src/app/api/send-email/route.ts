// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validar que todos los campos estén presentes
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Enviar el email usando Resend
    const data = await resend.emails.send({
      from: 'Sindicato Afrodita <onboarding@resend.dev>',
      to: ['matiasgarcesc@gmail.com'],
      replyTo: email,
      subject: `[Contacto Web - ${asunto}] ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1a1a1a;
                color: white;
                padding: 20px;
                margin-bottom: 30px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background-color: #f9f9f9;
                padding: 25px;
                border-radius: 5px;
                margin-bottom: 20px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                color: #1a1a1a;
                font-size: 16px;
              }
              .message {
                background-color: white;
                padding: 20px;
                border-left: 4px solid #1a1a1a;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                color: #999;
                font-size: 12px;
                padding-top: 20px;
                border-top: 1px solid #eee;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nuevo mensaje desde la web</h1>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">Nombre</div>
                <div class="field-value">${nombre}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Correo Electrónico</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Asunto</div>
                <div class="field-value">${asunto}</div>
              </div>
            </div>
            
            <div class="field">
              <div class="field-label">Mensaje</div>
              <div class="message">${mensaje}</div>
            </div>
            
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de archivoafrodita.cl</p>
              <p>Puedes responder directamente a este correo para contactar con ${nombre}</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' },
      { status: 500 }
    );
  }
}