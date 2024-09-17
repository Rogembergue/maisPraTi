const prompt = require("prompt-sync")();

const funcionarios = [
    { nome: 'Rogem', cargo: 'Desenvolvedor', salario: 6000 },
    { nome: 'Carlinhos', cargo: 'Designer', salario: 10000 },
    { nome: 'Cleiton', cargo: 'Engenheiro', salario: 6000 },
    { nome: 'Karol', cargo: 'Engenheira', salario: 20000 }
];

const salarioMinimo = 5000;

for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`);
    }
}
