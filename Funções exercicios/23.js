/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function boletim(nome,prova1,prova2,prova3){
    console.log(`Olá ${nome}, sua nota final é: ` + media(prova1,prova2,prova3))
    console.log(`Você foi ` + aprova(media(prova1,prova2,prova3)))
}
function media(p1,p2,p3){
    return ((p1*4)+(p2*3)+(p3*3))/(10)
}
function aprova(nota) {
    if (nota > 5) {
        return " APROVADO!"
    } else if (nota < 5) {
        return " Reprovado!!!!"
    } else {
        return " error: 345564"
    }
}
boletim("Andrei", 4.9, 5, 5)