/*function somar(a, b) {
  return a + b;
}

let operacao = somar;
console.log(operacao(4, 5));

operacao = function (a, b) {
  return a - b;
};
console.log(operacao(4, 5));*/

olaMundo();

function olaMundo() {
  console.log("Olá, mundo!");
}

//Funções anonimas so podem ser acessadas depois da declaração
const oiMundo = function () {
  console.log("Oi, mundo!");
};

oiMundo();