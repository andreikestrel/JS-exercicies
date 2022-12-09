/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/
function comparaAltura(altura1, taxa1, altura2, taxa2) {
    let alturaMenor = 0
    let taxaMenor = 0
    let alturaMaior = 0
    let taxaMaior = 0
    let anoMark = 0
    let select = false
    if (taxa1 != taxa2 && altura1 != altura2) {
        if (altura1 > altura2 && taxa1 > taxa2) {
            alturaMenor = altura2
            alturaMaior = altura1
            taxaMenor = taxa2
            taxaMaior = taxa1

        } else if (altura2 > altura1 && taxa2 > taxa1) {
            alturaMenor = altura1
            alturaMaior = altura2
            taxaMenor = taxa1
            taxaMaior = taxa2

        } else if (altura1 < altura2 && taxa1 > taxa2) {
            alturaMenor = altura1
            alturaMaior = altura2
            taxaMenor = taxa2
            taxaMaior = taxa1
            select = true
        }
        else if (altura1 > altura2 && taxa1 < taxa2) {
            alturaMenor = altura2
            alturaMaior = altura1
            taxaMenor = taxa1
            taxaMaior = taxa2
            select = true
        }
        if (select == false) {
            return "A criança maior sempre será maior."
        } else if (select == true) {
            while (alturaMenor < alturaMaior) {
                alturaMenor = calculeAltura(alturaMenor,taxaMaior)
                alturaMaior = calculeAltura(alturaMaior,taxaMenor)
                anoMark++
            }
        }
        return "A altura menor ira passar a maior em " + anoMark + " anos."
    } else {
        return `As alturas e taxas são iguais.`
    }
}
function calculeAltura(altura,taxa){
   return  altura = altura + (altura * taxa)
}
console.log(comparaAltura(100, 0.27, 120, 0.25))