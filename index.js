// Arrow Functions e Higher-Order Functions no JavaScript

// Sintaxe da Arrow Function
const soma = function (a, b) {
    return a + b;
};
console.log(soma(2, 3)); // 5]


//  Arrow Functions, podemos reescrever esse código de forma mais concisa:
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5


// Principais Características das Arrow Functions:
// Se a função tiver apenas um parâmetro, os parênteses são opcionais:
const quadrado = x => x * x;
console.log(quadrado(4)); // 16

//Se houver múltiplos parâmetros, os parênteses são obrigatórios:
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4)); // 12

//Se houver mais de uma linha no corpo da função, é necessário usar {} e a palavra-chave return explicitamente:
const saudacao = (nome) => {
    return `Olá, ${nome}!`;
};
console.log(saudacao("João")); // "Olá, João!"


//Higher-Order Functions (Funções de Alta Ordem)
//Exemplo de Higher-Order Function:
//Antes do ES6:
function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}
function somar(x, y) {
    return x + y;
}
console.log(aplicarOperacao(5, 3, somar)); // 8

//Com Arrow Functions, podemos simplificar ainda mais:
const aplicarOperacao = (a, b, operacao) => operacao(a, b);
console.log(aplicarOperacao(5, 3, (x, y) => x + y)); // 8
console.log(aplicarOperacao(10, 2, (x, y) => x * y)); // 20

//Exemplos comuns de Higher-Order Functions no JavaScript:
// map() – Transforma um array aplicando uma função em cada elemento:
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8]17/02/2025 - Nivelamento JavaScript (Parte 2) 

//filter() – Retorna um novo array apenas com os elementos que atendem a uma condição:
const idades = [10, 22, 30, 15, 18];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // [22, 30, 18]

//reduce() – Reduz um array a um único valor:
const valores = [10, 20, 30, 40];
const soma = valores.reduce((total, num) => total + num, 0);
console.log(soma); // 100