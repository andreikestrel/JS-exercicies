/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/


let vetorTeste = [2, 7, 8.5, 10, 12, 23, 15, 13, 17]

for (let i = 0; i < vetorTeste.length; i++) {
    if (vetorTeste[i] >= 10) {
        console.log(vetorTeste[i] + " entre o intervalo !")
    } else {
        console.log(vetorTeste[i] + " FORA")
    }
}
