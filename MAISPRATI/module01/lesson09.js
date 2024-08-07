const prompt = require("prompt-sync")();

//1. Soma dos elementos de um array
// let sum = 0;
// let arr = [10 ,20 ,30 ,40];
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]  
//     console.log(sum);
// }

//2. Maior elemento de um array
// let arr = [2, 5, 1, 9, 3];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//         max = arr[i];
//     }
// }
// console.log(`Maior numero do array: ${max}`);

//3. Reverter um Array
// let arr = [2, 5, 7, 2, 3];
// let newarr = [];
// for (let i = arr.length - 1; i >= 0; i--){
//     newarr.push(arr[i])
//     console.log(arr[i]);
// }

// 4. Array com numeros pares
// let arr = [2, 5, 7, 4, 3];
// let newarr = [];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]%2===0) {
//         newarr.push(arr[i])
//         console.log(arr[i]);
//     }
// }

// //Matriz
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let matriz2 = [
//     [5, 7, 3],
//     [6, 1, 0],
//     [2, 8, 5]
// ];

// for (let i = 0; i < matriz.length; i++) {
//     for (let j = 0; j < matriz[i].length; j++) {
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`);
//     }
// }

// // Soma Matriz
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let matriz2 = [
//     [5, 7, 3],
//     [6, 1, 0],
//     [2, 8, 5]
// ];

// let sum = [];

// for (let i = 0; i < matriz.length; i++) {
//     let somaLinha = [];
//     for (let j = 0; j < matriz[i].length; j++) {
//         somaLinha.push(matriz[i][j] + matriz2[i][j]);
//     }
//     sum.push(somaLinha);
// }
// console.table(sum);

// //Soma Diagonal da Matriz
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let matriz2 = [
//     [5, 7, 3],
//     [6, 1, 0],
//     [2, 8, 5]
// ];

// let sum = [];
// let diag = [];

// for (let i = 0; i < matriz.length; i++) {
//     let somaLinha = [];
//     let somaDiagonal = []
//     for (let j = 0; j < matriz[i].length; j++) {
//         somaLinha.push(matriz[i][j] + matriz2[i][j]);
//     }
//     sum.push(somaLinha);
// }
// console.table(sum);