export default function handler(req, res) {
    console.log('Solicitud recibida en la API');
    res.status(200).json({ message: 'API funcionando correctamente' });
  }
  