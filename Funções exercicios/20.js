/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

function saque(dinheiro) {
    // R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
    // 18
    let cedulas100 = 0
    let cedulas50 = 0
    let cedulas10 = 0
    let cedulas5 = 0
    let cedulas1 = 0
    let dinheiroFinal = calcula(dinheiro)

    while (dinheiro >= dinheiroFinal) {
        switch (dinheiroFinal) {
            case 100:
                dinheiro -= 100
                cedulas100++
                break
            case 50:
                dinheiro -= 50
                cedulas50++
                break
            case 10:
                dinheiro -= 10
                cedulas10++
                break
            case 5:
                dinheiro -= 5
                cedulas5++
                break
            case 1:
                dinheiro -= 1
                cedulas1++
                break
        }
        dinheiroFinal = calcula(dinheiro)
    }
    return showResult(cedulas100, cedulas50, cedulas10, cedulas5, cedulas1)
}
function calcula(saque) {
    if (saque >= 100) {
        return 100
    } else if (saque >= 50) {
        return 50
    } else if (saque >= 10) {
        return 10
    } else if (saque >= 5) {
        return 5
    } else if (saque >= 1) {
        return 1
    }
}
function showResult(valor100, valor50, valor10, valor5, valor1) {
    let result = ' '
    if (valor100 > 0) {
        result += `${valor100} nota(s) de R$ 100. || `
    }
    if (valor50 > 0) {
        result += `${valor50} nota(s) de R$ 50. || `
    }
    if (valor100 > 0) {
        result += `${valor10} nota(s) de R$ 10. || `
    }
    if (valor5 > 0) {
        result += `${valor5} nota(s) de R$ 5. || `
    }
    if (valor1 > 0) {
        result += `${valor1} nota(s) de R$ 1. || `
    }
    return result
}
console.log(saque(3895))