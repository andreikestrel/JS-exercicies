/*  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */
function typeOfTri(a, b, c) {
    if (a == b && b == c && a == c) {
        return "Equilátero"
    } else if ((a == b) || (a == c) || (b == c)) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

let ladoA = 5
let ladoB = 5
let ladoC = 5

let ladoD = 10
let ladoE = 9
let ladoF = 10

let ladoG = 5
let ladoH = 10
let ladoI = 9

console.log("Teste três lados iguais: " + typeOfTri(ladoA, ladoB, ladoC))
console.log("Teste dois lados iguais: " + typeOfTri(ladoD, ladoE, ladoF))
console.log("Teste nenhum lado igual: " + typeOfTri(ladoG, ladoH, ladoI))