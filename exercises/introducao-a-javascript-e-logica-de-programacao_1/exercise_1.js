//Exercício 1

let diasLetivosTrybe = 365
let faltasPermitidas = 48
let trocasDeTurmasPermitidas = 3
let conteudeosModulo1 = 10
let conteudosModulo2 = 9
let conteudeosModulo3 = 14
let conteudeosModulo4 = 6


console.log (diasLetivosTrybe - faltasPermitidas)
console.log (conteudeosModulo1 + conteudosModulo2 + conteudeosModulo3 + conteudeosModulo4)
console.log ((faltasPermitidas * 100) / diasLetivosTrybe)
console.log (diasLetivosTrybe % faltasPermitidas)

// Exercício 2

let diasDoAno = 365;
let diasLetivosObrigatorios = 317;

if (diasDoAno > diasLetivosObrigatorios) {
  console.log ('A quantidade de dias do ano é maior do que a quantidade de dias letivos obrigatórios na Trybe')  
} else if (diasLetivosObrigatorios > diasDoAno) {
  console.log ('A quantidade de dias letivos é maior do que a quantidade de dias do ano na Trybe')
};
