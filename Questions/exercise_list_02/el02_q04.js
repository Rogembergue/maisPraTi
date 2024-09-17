const prompt = require("prompt-sync")();

// Array
const pessoas = [
    { nome: 'Naruto', idade: 30, cidade: 'Konoha' },
    { nome: 'Sasuke', idade: 30, cidade: 'Konoha' },
    { nome: 'Sakura', idade: 30, cidade: 'Konoha' },
    { nome: 'Toji Fushiguro', idade: 32, cidade: 'Paraiso' },
    { nome: 'Satoro Gojo', idade: 32, cidade: 'Paraiso' },
];

// Exibiçao
for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
