//ATIVIDADE 2
//let peso = Number(prompt("Digite seu peso "))
//let altura = Number(prompt("Digite seu altura "))

//let imc = peso / altura**2
//console.log(imc)

//if (imc < 16.9){
//    console.log("Muito abaixo do peso")
//}
//else if(imc >= 17 && imc <= 18.4){
//    console.log("Abaixo do peso")
//}
//else if(imc >= 18.5 && imc <= 24.9){
//    console.log("Peso Normal")
//}
//else if(imc >= 25 && imc <= 29.9){
//    console.log("Acima do peso")
//}
//else if(imc >= 30 && imc <= 34.9){
//    console.log("Obesidade gra 1")
//}
//else if(imc >= 35 && imc <= 40){
//    console.log("Obesidade grau 2")
//}

/*ATIVIDADE 3 
const precoProduto = Number(prompt("Digite numero de um produto "))
const idade = Number(prompt("Digite sua idade "))

if (idade < 18){
    let precoDesconto = precoProduto - (0.10 * precoProduto)
    console.log("Com desconto de 10%")
    console.log(precoDesconto)
}
else{
    console.log("Sem desconto")
}*/

// ATIVIDADE 6
// let lado1 = Number(prompt("Digite o primeiro lado"))
// let lado2 = Number(prompt("Digite o segundo lado"))
// let lado3 = Number(prompt("Digite o terceiro lado"))

// if (lado1 === lado2 && lado1 === lado3){
    // console.log("Equilatero")
// }else if (lado1 === lado2 && lado1 !== lado3 || lado1 === lado3 && lado1 !== lado2 || lado2 === lado3 && lado2 !== lado1){
    // console.log("isoceles")
// }else{
    // console.log("escaleno")
// }

// ATIVIDADE 6
let numero = Number(prompt("Digite um numero "))

switch (numero){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
        console.log("Terca")
        break;
    case 4:
        console.log("Quarta")
        break;
    case 5:
        console.log("Quinta")
        break;
    case 6:
        console.log("Sexta")
        break;
    case 7:
        console.log("Sabado")
        break;
}
