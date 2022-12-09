/*Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
4) conveniados acima de 60 anos pagam R$130 */

function convenio(idade){
    let valorEntrada = 100
    if(idade>0 && idade<10){
        return valorEntrada + 80
    } else if (idade>=10 && idade<30){
        return valorEntrada+50
    } else if(idade >=30 && idade<=60){
        return valorEntrada+95
    } else if(idade>60){
        return valorEntrada+130
    } else if(typeof(idade)!=Number||idade<0){
        return "operação invalida"
    }


 
    
}

console.log(convenio(-4))
console.log(convenio(5))
console.log(convenio(15))
console.log(convenio(25))
console.log(convenio(50))
console.log(convenio(75))
console.log(convenio("arroz"))
