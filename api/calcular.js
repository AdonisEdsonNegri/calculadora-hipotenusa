module.exports = (req, res) => {
  const lado1 = parseFloat(req.query.lado1);
  const lado2 = parseFloat(req.query.lado2);
  
  const somaDosQuadrados = lado1 * lado1 + lado2 * lado2;
  const hipotenusa = Math.sqrt(somaDosQuadrados);
  
  res.json({ hipotenusa: hipotenusa });
};