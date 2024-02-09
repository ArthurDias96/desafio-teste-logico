function encontrarDuplicados(array) {
  var contador = {};
  var duplicados = [];

  array.forEach(function (elemento) {
    if (contador[elemento] === undefined) {
      contador[elemento] = 1;
    } else {
      contador[elemento]++;
    }
  });
  for (var elemento in contador) {
    if (contador[elemento] > 1) {
      duplicados.push(parseInt(elemento));
    }
  }
  return duplicados;
}