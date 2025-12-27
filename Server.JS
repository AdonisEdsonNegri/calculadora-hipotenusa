const express = require('express');
const app = express();
const porta = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Rota para calcular a hipotenusa
app.get('/calcular', (req, res) => {
  const lado1 = parseFloat(req.query.lado1);
  const lado2 = parseFloat(req.query.lado2);
  
  const somaDosQuadrados = lado1 * lado1 + lado2 * lado2;
  const hipotenusa = Math.sqrt(somaDosQuadrados);
  
  res.json({ hipotenusa: hipotenusa });
});

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
  });
}

// Exportar para a Vercel
module.exports = app;
