// Erro proposital
let velocidade = 0;

do {
  alert("A velocidade do veiculo é " + velocidade + " km/h");
  //velocidade = velocidade - 20
  velocidade -= 20;
} while (velocidade > 0);

alert("Velocidade final: " + velocidade + "km/h");
