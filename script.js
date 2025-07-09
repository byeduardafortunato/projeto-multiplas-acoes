function calcular() {
  // Pegando os valores dos inputs
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  let operacao = document.getElementById("operacao").value;

  // parseFloat transforma o texto em número com casas decimais, exemplo: "5.5" vira 5.5
  numero1 = parseFloat(numero1);
  numero2 = parseFloat(numero2);

  // isNaN verifica se o valor "não é um número". Se for texto ou campo vazio, ele avisa
  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").textContent = "Por favor, digite dois números válidos.";
    return; // sai da função se o número for inválido
  }

  let resultado; // variavel que vai guardar o resultado da conta

  // Verificando qual operação foi escolhida
  if (operacao === "soma") {
    resultado = numero1 + numero2;
  } else if (operacao === "subtracao") {
    resultado = numero1 - numero2;
  } else if (operacao === "multiplicacao") {
    resultado = numero1 * numero2;
  } else if (operacao === "divisao") {
    if (numero2 === 0) {
      // Tratamento para não dividir por zero
      document.getElementById("resultado").textContent = "Não é possível dividir por zero.";
      return;
    }
    resultado = numero1 / numero2;
  }

  // Exibindo o resultado na tela
  document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}