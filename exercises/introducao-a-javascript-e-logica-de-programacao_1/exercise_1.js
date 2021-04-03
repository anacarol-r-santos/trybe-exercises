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

// Exercicio 3

let diasDoAno = 365
let diasLetivosObrigatorios = 317
let faltasPermitidas = 370

if (diasDoAno > diasLetivosObrigatorios && diasDoAno > faltasPermitidas) { 
  console.log ('Os dias do ano estão em maior quantidade.')  
} else if (diasLetivosObrigatorios > diasDoAno && diasLetivosObrigatorios > faltasPermitidas) {
  console.log ('Os dias letivos obrigatórios estão em maior quantidade.')
} else if (faltasPermitidas > diasDoAno && faltasPermitidas > diasLetivosObrigatorios) {
  console.log ('As faltas permitidas estão em maior quantidade e aí virou bagunça!')
}

//Exercicio 4

let notaDoProjeto = 20;
let notaParaAprovacaoDoProjeto = 80;
let notaParaAprovacaoDaRecuperacao = 90;

if (notaDoProjeto >= 80) {
  console.log ('Positive. Seu projeto foi aprovado!')
} else if (notaDoProjeto < 80) {
  console.log ('Negative. Seu projeto foi reprovado.')  
} else (console.log ('Zero'))

// Exercicio 5

  let anguloA = 90;
  let anguloB = 60;
  let anguloC = 30;

  if ((anguloA + anguloB + anguloC) = 180) {
    console.log ('True')  
  } else {
    console.log ('false')
  }


