/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

let vetor = [10,15,25,32,4,7,9,1]
let pares = 0
let impares = 0
for(let i=0;i<vetor.length;i++){
    if(vetor[i]%2==0){
        pares++
    } else if(vetor[i]%2!=0){
        impares++
    }
}

console.log(`Numero de pares: ${pares} //  Número de impares ${impares}`)