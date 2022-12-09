/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
9F3TE6-EM16M6 */ 
let frutas = ["Maca","Kiwi","Melancia"]
function vender(fruta){
    switch(fruta){
    case "Maca":
        console.log("Não vendemos esta fruta aqui.")
        break
    case "Kiwi":
        console.log("Estamos com escassez de kiwis.")
        break
    case "Melancia":
        console.log("Aqui esta, são 3 reais o kg.")
        break
    default: 
        return console.log("Erro: Operação invalida")     
}
}
vender(frutas[0])
vender(frutas[1])
vender(frutas[2])
vender(frutas[72])