const prompt = require("prompt-sync")();

const livro = {
    titulo: `Harry Potter`,
    autor: `J. K. Rollin`,
    anoPublicacao: 2010,
    genero: `Ficção`
}

for (const propriedade in livro) {
    if (propriedade === `editora`) {
        console.log(`A editora existe!`);
        break;
    }else{
        console.log(`A editora não existe!`);
        let novaEditora = prompt(`Insira o nome da editora: `);
        livro[`editora`] = novaEditora;
        break;
    }
}

console.log(livro);