// SLIDE 17

let textoDigitado = document.getElementById("texto")
let inputBotaoEnviar = document.getElementById("botaoEnviar")
let inputBotaoVer = document.getElementById("botaoVer")
let inputBotaoApagar = document.getElementById("botaoApagar")
let exibir

let lista = []

function enviar(){
   lista.push(textoDigitado.value)
   localStorage.setItem("lista", JSON.stringify(lista))
}

function ver(){
   alert(localStorage.getItem("lista"))
}

function apagar(){
    localStorage.removeItem("lista")
 }

 // SLIDE 26

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let inputBotaoSoma = document.getElementById("soma")
let inputBotaoSubtrai = document.getElementById("subtrai")
let inputBotaoMultiplica = document.getElementById("multiplica")
let inputBotaoDivide = document.getElementById("divide")
let div = document.getElementById("minhaDiv")
let element

function soma() {
    let resultadoSoma = parseInt(num1.value) + parseInt(num2.value);
    element = document.createElement("p");
    element.innertext = resultadoSoma;
    div.appendChild(element)

    console.log(resultadoSoma)
}

function subtrai() {
    let resultadoSubtracao = parseInt(num1.value) - parseInt(num2.value);
    element = document.createElement("p");
    element.innertext = resultadoSubtracao;
    div.appendChild(element)

    console.log(resultadoSubtracao)
}

function multiplica() {
    let resultadoMultiplicacao = parseInt(num1.value) * parseInt(num2.value);
    element = document.createElement("p");
    element.innertext = resultadoMultiplicacao;
    div.appendChild(element)

    console.log(resultadoMultiplicacao)
}

function divide() {
    let resultadoDivisao = parseInt(num1.value) / parseInt(num2.value);
    element = document.createElement("p");
    element.innertext = resultadoDivisao;
    div.appendChild(element)

    console.log(resultadoDivisao)
}