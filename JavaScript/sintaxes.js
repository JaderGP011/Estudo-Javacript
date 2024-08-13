//Sintaxe

//FUNÇÕES
function somar(a, b) {
  return a + b;
}
//formas de atribuição
var total = soma(45, 2);
alert(total);
document.getElementById("texto").innerHTML = somar(1, 13);

//OBJETOS
const carro = {
  marca: "Ford",
  modelo: "ka",
  ano: 2015,
  placa: "ABC-1234",
  buzina: function() {
    console.log("BIBIBIBIIBIIBI")
  }
};
console.log(carro.marca);
console.log(carro["marca"]);
carro.buzina();