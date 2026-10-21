// let nome = "Arthur"
// saudacao(nome)

// function saudacao(nome){
//     console.log("Olá " + nome)
// }

// ---------------------------------------------------------------

// let numero1 = 2
// let numero2 = 4

// let resultado = somar(numero1, numero2)

// console.log(resultado)

// function somar (numero1, numero2){
//     return numero1 + numero2
// }

// --------------[function em tabuada]---------------

// // let numero = 2

// // gerarTabuada(numero)

// gerarTabuada(3)
// gerarTabuada(4)

// function gerarTabuada(numero){
//     for(let i =0; i <=10; i++) {
//     console.log(numero * i);
// }
// }

// let nome = "Arthur"
// saudacao(nome)

// function saudacao(nome){
//     console.log("Olá " + nome)
// }

// ---------------------------------------------------------------



// -------------[3functionsConexos]--------------
let peso = parseFloat(prompt("Digite seu peso (Kg): "))
let altura = parseFloat(prompt("Informe sua altura (m)"))

let resultado = calcularIMC(peso, altura)

function calcularIMC(peso, altura){
   return peso / (altura *altura)
}

function classificarIMC(imc){
    if(imc <18.5){
        alert("Baixo peso")
    } else if(imc >=18.5 && <=24.9){
        alert("Peso adequado")
    } else if(imc >=25.0 && <=29.9){
        alert("Sobrepeso")
    } else if(imc >=30.0 && <=34.9){
        alert("Obesidade grau I")
    } else if(imc >=35.0 && <=39.9){
        alert("Obesidade grau II")
    } else if(imc >=40.0)
    alert("Obesidade grau III")
}
function gerarRelatorio(peso, altura){

}