/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */ 
let dia = 1
switch(dia) {
    case 1: 
    case 7:
        return console.log("É final de semana")
        break
    case 2: case 3: case 4: case 5: case 6:
        return console.log("Não é final de semana")
        break
}
    
    
