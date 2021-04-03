//1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log (numbers [index]);
}

//2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
} console.log (soma);

//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
} console.log (soma / numbers.length);

//4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (index = 0; index < numbers.length; index += 1) {
  soma += numbers[index]
} 
if ((soma / numbers.length) > 20) {
  console.log ("valor maior que 20")
} else {
  console.log ("valor menor ou igual a 20")
};

//5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (maior > numbers [index]) {
  } else {
    maior = numbers [index]
  }
} console.log (maior)

//6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0

for (index = 0; index < numbers.length; index += 1) {
  if ((numbers [index] % 2) != 0) {
    impar += 1
  } else {}
} console.log (impar);

//7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers [0];

for (index = 0; index < numbers.length; index += 1) {
  if (menor < numbers [index]) {
  } else {
    menor = numbers [index]
  }
} console.log (menor);

//8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (index = 0; index < 25; index +=1) {
  array.push (index +1)
} console.log (array);

//9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];

for (index = 0; index < 25; index +=1) {
  array.push (index +1)
} console.log (array);

let meiaArray = []

for (index = 0; index < 25; index +=1) {
  meiaArray [index] = (array[index])/2
} console.log (meiaArray);

