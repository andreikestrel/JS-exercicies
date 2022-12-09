/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/


function calcula(escolha, x, y){
    switch(escolha){
        case "soma":
            return x+y
        case "subtração":
            return x-y
        case "multiplicação":
            return x*y
        case "divisão":
            return x/y   
    }
}

console.log(calcula("soma",10,5))
console.log(calcula("subtração",10,5))
console.log(calcula("multiplicação",10,5))
console.log(calcula("divisão",10,5))