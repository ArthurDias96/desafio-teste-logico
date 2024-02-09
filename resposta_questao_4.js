function anosComMaisPessoasTrabalhando(matriz) {
  const anosTrabalhados = {};
  matriz.forEach(([inicio, fim]) => {
    for (let ano = inicio; ano <= fim; ano++) {
      if (anosTrabalhados[ano] === undefined) {
        anosTrabalhados[ano] = 1;
      } else {
        anosTrabalhados[ano]++;
      }
    }
  });
  let maxPessoas = 0;
  let anosComMaisPessoas = [];
  for (let ano in anosTrabalhados) {
    if (anosTrabalhados[ano] > maxPessoas) {
      maxPessoas = anosTrabalhados[ano];
      anosComMaisPessoas = [ano];
    } else if (anosTrabalhados[ano] === maxPessoas) {
      anosComMaisPessoas.push(ano);
    }
  }
  return anosComMaisPessoas;
}