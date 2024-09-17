const prompt = require("prompt-sync")();

const filmes = [
    { titulo: 'O Senhor dos Anéis', diretor: 'Peter Jackson', anoLancamento: 2001 },
    { titulo: 'Matrix', diretor: 'Lana Wachowski, Lilly Wachowski', anoLancamento: 1999 },
    { titulo: 'Inception', diretor: 'Christopher Nolan', anoLancamento: 2010 }
];

const titulos = [];

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(titulos);