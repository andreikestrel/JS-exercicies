/*
 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/ 

function transcreve(x){
    switch(x){
        case 0:
            return "zero"
        case 1:
            return "um"
        case 2:
            return "dois"
        case 3:
            return "três"
        case 4:
            return "quatro"
        case 5:
            return "cinco"
        case 6:
            return "seis"
        case 7:
            return "sete"
        case 8:
            return "oito"
        case 9:
            return "nove"
        case 10: 
            return "dez"
        default: 
            return "Erro: operação invalida."
    }
}

console.log(transcreve(1))
console.log(transcreve(2))
console.log(transcreve(3))
console.log(transcreve(4))
console.log(transcreve(5))
console.log(transcreve(6))
console.log(transcreve(7))
console.log(transcreve(8))
console.log(transcreve(9))
console.log(transcreve(10))
console.log(transcreve(23))
