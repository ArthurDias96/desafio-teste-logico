function verifiquedigito(numero) {
  let numeroStr = numero.toString();
  let crescente = true;
  for (let i = 0; i < numeroStr.length - 1; i++) {
    if (parseInt(numeroStr[i]) > parseInt(numeroStr[i + 1])) {
      crescente = false;
      break;
    }
  }
  let descrecente = true;
  for (let i = 0; i < numeroStr.length - 1; i++) {
    if (parseInt(numeroStr[i]) < parseInt(numeroStr[i + 1])) {
      descrecente = false;
      break;
    }
  }
  if (crescente) {
    return "os digitos estao em ordenação sequencial crescente";
  } else if (descrecente) {
    return "os digitos estao em ordenação sequencial decrescente";
  } else {
    return "Os digitos nao está em ordem sequencial"
  }
}