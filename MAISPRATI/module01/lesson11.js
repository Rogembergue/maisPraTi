const prompt = require("prompt-sync")();

// let teste = function () {
//     console.log(`Ola, mundo!`);
// }

// teste();
//-------------------------------------------------------------
// //Estrutura base de Funcao
// function showFunction(successCallback, errorCallback) {
//     if (false) {
//         successCallback(`Requisiçao bem sucedida`)
//     }
//     else{
//         errorCallback(`Erro na requisiçao`)
//     }
// }

// let successCallback = function(message){
//     console.log(message);
// }

// let errorCallback = function(message){
//     console.log(message);
// }

// showFunction(successCallback, errorCallback)
//--------------------------------------------------------

// 1. Soma dos elementos de um array

// let arrSum = function(arr){
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(arrSum([10, 20, 30, 40]))
//--------------------------------------------------------
// //2. Maior elemento de um array

// let arrMaior = function(arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(arrMaior([10, 20, 30, 40]));
//--------------------------------------------------------
// 3. Reverter Array
let reverterArray = function(arr) {
    let newarr = [];
    for (let i = arr.length - 1; i >= 0; i--){
        newarr.push(arr[i])
        console.log(arr[i]);
    }
}

console.log(reverterArray[2, 5, 7, 3, 1])