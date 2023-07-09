//SLIDE 16

let variavel1 = "Aline Takara";
var variavel2 = 2;
var variavel3 = 5;
var somaNum = variavel2 + variavel3;
var multiplicacaoNum = variavel2 * variavel3;
let subtracao 

alert(somaNum);

console.log(variavel1,multiplicacaoNum);

// SLIDE 20

// SUBTRACAO

function subtraiNum(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}

let num1 = 5
let num2 = 2

if (num1 > num2) {
    alert(subtraiNum(num1, num2));
} else {
    alert("Não foi possível subtrair.")
}

// DIVISAO

function divideNum(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}

if (num2 > 0) {
    alert(divideNum(num1, num2));
} else {
    alert("Não foi possível dividir.")
}

// SLIDE 26

let fruta = {
    nome: "maçã",
    cor: "vermelho",
    forma: "redonda",
    peso: 5,
}

console.log(fruta);

// SLIDE 31

let comida1 = {
    nome: "Maçã",
    cor: "Vermelho",
    peso: 100,
    tipo: "fruta"
};

let comida2 = {
    nome: "Alface",
    cor: "Verde",
    peso: 90,
    tipo: "verdura"
};

let comida3 = {
    nome: "Tomate",
    cor: "Vermelho",
    peso: 200,
    tipo: "fruta"
};

let comida4 = {
    nome: "Abobrinha",
    cor: "Verde",
    peso: 300,
    tipo: "verdura"
};

let comida5 = {
    nome: "Beringela",
    cor: "Roxo",
    peso: 350,
    tipo: "verdura"
};

let comidas = [comida1, comida2, comida3, comida4, comida5];

console.log(comidas);

//SLIDE 34

//function exibirNomes(comidas) {
var cont = 0;
   // var resultadoNome
    while (cont < comidas.length){
        console.log(comidas[cont].nome)
        cont = cont + 1;
    }
