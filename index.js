const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Proyecto Node.js base para migración desde PHP');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
