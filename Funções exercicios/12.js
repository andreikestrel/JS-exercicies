/* 12) Faça um algoritmo que calcule o fatorial de um número. */ 

function fatorial(x){
    if(x==1){
        return 1
    } else {
        return x * fatorial(x-1)
    }
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(5))
console.log(fatorial(7))
console.log(fatorial(10))
