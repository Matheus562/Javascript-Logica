let pessoa = {
  nome: "Tiago",
  idade: 26,
  dizerOla() {
    console.log("Ola, mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);
pessoa.dizerOla();