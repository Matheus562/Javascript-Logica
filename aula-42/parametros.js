//Com parâmetro e sem retorno
function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}
//dobro(5);
//dobro(7);

//Valor padrão
function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}
//dizerOla("Paulo");
//dizerOla();

//Multiplos parâmetros
function soma(a, b) {
  alert("O resultado da soma é " + (a + b));
}
//soma(5, 5);

//Ordem dos parâmetros
function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome, // forma abreviada de nome: nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

function novoUsuario(nome, tipo = "admin", email, senha) {
  const usuario = {
    nome, // forma abreviada de nome: nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}
//criarUsuario("Matheus", "mathluc4@gmail.com", "12345");
//novoUsuario("Matheus", "mathluc4@gmail.com", "12345");

//Transformando parametros em objeto
function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  // ...
}
function objetoComoParametros(usuario) {
  // ...
  usuario.nome;
  usuario.email;
}
muitosParametros(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);

const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  endereco: "",
  aniversario: "",
};

objetoComoParametros(dadosDoUsuario);
