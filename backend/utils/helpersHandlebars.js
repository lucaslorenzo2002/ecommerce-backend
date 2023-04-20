const handlebars = require('handlebars');

const calcularTotal = handlebars.registerHelper('multiplicar', function(a, b) {
  return a * b;
});

module.exports = calcularTotal