const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // Middleware

app.get('/', (req, res) => {
  res.send('🟢 Servidor básico funcionando en Railway');
});

app.post('/webhook', (req, res) => {
  console.log('📩 Webhook recibido:', req.body);
  res.status(200).send('🟢 Webhook recibido');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor activo en http://0.0.0.0:${PORT}`);
});
