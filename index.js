const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });
}
