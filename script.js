/*

Você precisa criar um algoritmo que, a partir da soma de 3 notas semestrais de um aluno, calcule sua média final para, na sequência, informar se o aluno foi reprovado ou aprovado, considerando as seguintes referências:

de 7 a 10 – aprovado.
abaixo de 7 – reprovado.

Calculará a média do aluno. Ele deve possuir como entrada as 3 notas obtidas durante o semestre. O processamento deverá realizar o cálculo da média, somando as notas e dividindo o resultado por 3. Por fim, a saída (ou resultado) será a média obtida pelo aluno.

*/

var prompt = require('prompt-sync')();


const notaA = +prompt("Digite sua nota A: ")
const notaB  = +prompt("Digite sua nota B: ")
const notaC  = +prompt("Digite sua nota C: ")

const media = ((notaA)+(notaB)+(notaC))/3;

if (media >=7)
    console.log(`${media} Aprovado!`)
else if (media <7) 

console.log (`${media} Reprovado!`)
