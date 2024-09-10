import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, correo, mensaje, categoria } = req.body;

    console.log('Datos recibidos en la API:', { nombre, correo, mensaje, categoria });

    try {
      const response = await sendgrid.send({
        to: 'consultasforchieri@gmail.com', // Correo de destino
        from: 'consultasforchieri@gmail.com', // Correo autorizado en SendGrid
        subject: `Nuevo mensaje de contacto: ${categoria}`,
        text: `
          Nombre: ${nombre}
          Correo: ${correo}
          Mensaje: ${mensaje}
        `,
      });

      console.log('Respuesta de SendGrid:', response);

      return res.status(200).json({ message: 'Correo enviado exitosamente' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    console.log(`Método ${req.method} no permitido`);
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
