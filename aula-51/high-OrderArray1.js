const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// Map. Cria um novo array com as modificações
/*const nomes = [];
for (let i = 0; i < personagens.length; i++) {
  nomes.push(personagens[i].nome);
}
console.log(nomes);*/

const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(nomes);

//Filter. Filtra elementos de um array e adiciona em um novo
/*const orcs = [];
for (let i = 0; i < personagens.length; i++) {
  if (personagens[i].raca === "Orc") {
    orcs.push(personagens[i]);
  }
}
console.log(orcs);*/
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});
console.log(orcs);

//Reduce. Transforma o array em um outro elemento
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0); // "0" == valor inicial
console.log(nivelTotal);

//Agrupamento por raças utilizando Reduce
const racas = personagens.reduce(function (valorAcumulado, personagem) {
  if (valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem);
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  }
  return valorAcumulado;
}, {}); //Objeto vazio

console.log(racas);

//Sort, ordena os arrays alterando o array original
/*personagens.sort(function (a, b) {
  return a.nivel - b.nivel; //Ordem crescente. Decrescente == b.nivel - a.nivel
});

console.log(personagens);*/

//Sort com uma copia do array sem modificá-lo
const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return a.nivel - b.nivel;
});

console.log(personagens);
console.log(personagensOrdenados);
