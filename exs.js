// Exercício 1: Arrow Function com um parâmetro

console.log(dobro(10)); // 20
console.log(dobro(100)); // 200

// Exercício 2: Arrow Function com múltiplos parâmetros

console.log(dividir(10, 1)); // 10
console.log(dividir(6, 2));  // 3

// Exercício 3: Arrow Function com múltiplas linhas
console.log(mensagemBoasVindas("Juliana")); // "Seja bem-vinda, Juliana!"
console.log(mensagemBoasVindas("Luiza"));    // "Seja bem-vinda, Luiza!"

// Exercício 4: Higher-Order Function personalizada
console.log(executarOperacao(3, 2, (a, b) => a - b)); // 1
console.log(executarOperacao(2, 5, (a, b) => a * b)); // 10

//Exercício 5: map() – Transformação de um array
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto); // [90, 180, 270, 360]

//Exercício 6: filter() – Filtrando valores em um array
const idades = [12, 19, 17, 22, 14, 30];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade); // [12, 17, 14]

//Exercício 7: reduce() – Somando valores de um array
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)