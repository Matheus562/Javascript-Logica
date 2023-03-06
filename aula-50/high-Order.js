// Função que recebe outra função como parametro
function calcular(a, b, operacao) {
  console.log("Realizando uma operacao.");
  const resultado = operacao(a, b); //somar(3, 5)
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma.");
  return x + y;
}

console.log(calcular(3, 5, somar));

//Utilizando funções anonimas
console.log(
  calcular(8, 4, function (x, y) {
    console.log("Realizando uma subtração.");
    return x - y;
  })
);

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}
console.log("\n");

const lista = ["Maçã", "Banana", "Laranja", "Limão"];
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}
console.log("\n");

lista.forEach(exibirElemento);
console.log("\n");

//Utilizando funções anonimas
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
