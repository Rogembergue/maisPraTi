const prompt = require("prompt-sync")();

const alunos = [
    { nome: 'Jiraya', nota1: 4.1, nota2: 7.9 },
    { nome: 'Light Yagami', nota1: 10.0, nota2: 10.0 },
    { nome: 'Yamato', nota1: 5.0, nota2: 7.0 },
    { nome: 'Itachi Uchiha', nota1: 10.0, nota2: 10.0 }
];

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Aluno: ${aluno.nome}, Media: ${media.toFixed(2)}`);
}
