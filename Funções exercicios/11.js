/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
// Função : Define se um dado ano é bissexto - Um ano é bisssexto se ele for
// divisível por 400 ou se for divisível por 4 e não por 100
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */
function verificaBi6(ano){
    if(ano%400 == 0 || ano%4 == 0){
        return true
    } else {return false}
}
console.log(verificaBi6(15))