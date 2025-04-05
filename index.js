require('dotenv').config(); // 👈 AÑADIDO

const express = require('express');
const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('🟢 Servidor básico funcionando en Railway');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor activo en http://0.0.0.0:${PORT}`);
});
