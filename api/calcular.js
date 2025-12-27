module.exports = (req, res) => {
  const lado1 = parseFloat(req.query.lado1);
  const lado2 = parseFloat(req.query.lado2);
  
  if (isNaN(lado1) || isNaN(lado2)) {
    return res.status(400).json({ error: 'Valores inválidos' });
  }
  
  const somaDosQuadrados = lado1 * lado1 + lado2 * lado2;
  const hipotenusa = Math.sqrt(somaDosQuadrados);
  
  res.status(200).json({ hipotenusa: hipotenusa });
};
