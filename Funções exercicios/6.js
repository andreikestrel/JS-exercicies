/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurSimple(capital,taxa,tempo){
    return capital+(capital*taxa*tempo)
}
function jurCompost(capital,taxa,tempo){
    return capital*(1+taxa)**tempo
}


console.log("Juros compostos: " + jurCompost(620, 0.015, 24) )

