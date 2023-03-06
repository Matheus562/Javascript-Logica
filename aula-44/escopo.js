/* //Variaveis do escopo externo sendo usadas no escopo interno
let nome = "Rodrigo";

function trocar() {
  nome = "Paulo";
}
console.log(nome);
trocar();
console.log(nome);

// O contrario não se aplica
function criarAnimal() {
  let animal = "gato";
}

criarAnimal();
//console.log(animal);

// var visivel no escopo externo
function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true;
    let situacao = "Aprovado";
  } else {
    var aprovado = false;
    let situacao = "Reprovado";
  }
  console.log(nota);
  console.log(aprovado);
  console.log(situacao);
}
//avaliarNota(83);
//avaliarNota(49);

function ola() {
  var texto = "Olá, mundo!";
}
//console.log(texto);
*/

// erro undefined
console.log(nome);
console.log(sobrenome);

var nome = "Paulo";
let sobrenome = "Pontes";

console.log(nome);
console.log(sobrenome);
