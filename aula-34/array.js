const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);
// Adicionar Elementos
//Push adiciona um elemento no final do array
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// unshift adiciona um elemento no inicio do array
tamanho = arr.unshift("Teste");
console.log(arr);
console.log(tamanho);

//Pop remove um elemento que está no final do array
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift remove elementos no inicio do array
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//Pesquisar por elemento
//Includes, verifica se o elemento está incluso no array
const inclui = arr.includes("Gandalf");
console.log(inclui);

//indexOf pesquisa pelo indice
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e concatenar os arrays
// slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4); //Indice começando do ultimo elemento do array;
console.log(arr);
console.log(hobbits);
console.log(outros);

//Concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

//Substituição dos Elementos
//Splice
const elementosRemovidos = sociedade.splice(
  indice,
  1,
  "Gandalf, o cinzento",
  1,
  2,
  3,
  false,
  true
);
console.log(sociedade);
console.log(elementosRemovidos);

//Interar sobre os elementos. Percorrer o array
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
