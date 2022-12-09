/*
19) O cardápio de uma lanchonete é o seguinte:
Código     Descrição do Produto        Preço
100        Cachorro Quente             R$ 3,00
200        Hambúrguer Simples          R$ 4,00
300        Cheeseburguer               R$ 5,50
400        Bauru                       R$ 7,50
500        Refrigerante                R$ 3,50
600        Suco                        R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/ 

function escolhaCardapio(code, quantidade){
    switch(code){
        case 100: 
            return "R$ "+3.00*quantidade
        case 200:
            return "R$ "+4.00*quantidade
        case 300:
            return "R$ "+5.50*quantidade
        case 400:
            return "R$ "+7.70*quantidade
        case 500:
            return "R$ "+3.50*quantidade 
        case 600:
            return "R$ "+ 2.80*quantidade
        default: return "Operação invalida."
    }
}

console.log(escolhaCardapio(300,2))
console.log(escolhaCardapio(200,3))
console.log(escolhaCardapio(100,1))
console.log(escolhaCardapio(600,2))
console.log(escolhaCardapio("a","b"))