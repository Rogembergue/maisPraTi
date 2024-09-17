const prompt = require("prompt-sync")();

const clientes = [
    { nome: 'Naruto', idade: 25, cidade: 'Konoha' },
    { nome: 'Sasuke', idade: 26, cidade: 'Konoha' },
    { nome: 'Sakura', idade: 30, cidade: 'Konoha' },
    { nome: 'Toji Fushiguro', idade: 32, cidade: 'Paraiso' }
];

let contagemClientesMaisDe30 = 0;

clientes.forEach(cliente => {
    if (cliente.idade >= 30) {
        contagemClientesMaisDe30++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${contagemClientesMaisDe30}`);