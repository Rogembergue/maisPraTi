const prompt = require("prompt-sync")();

const empresa = {
    departamentos: [
        {
            nome: 'Recursos Humanos',
            funcionarios: [
                { nome: 'Goku', cargo: 'Analista de RH' },
                { nome: 'Vegeta', cargo: 'Coordenador de RH' }
            ]
        },
        {
            nome: 'Tecnologia',
            funcionarios: [
                { nome: 'Babidí', cargo: 'Desenvolvedor' },
                { nome: 'Pícoli', cargo: 'Analista de Sistemas' }
            ]
        },
        {
            nome: 'Marketing',
            funcionarios: [
                { nome: 'Gohan', cargo: 'Gerente de Marketing' },
                { nome: 'Bulma', cargo: 'Assistente de Marketing' }
            ]
        }
    ]
};

for (const i in empresa.departamentos) {
    const departamento = empresa.departamentos[i];
    
    console.log(`Departamento: ${departamento.nome}`);
    
    for (const funcionario of departamento.funcionarios) {
        console.log(`  Funcionário: ${funcionario.nome}`);
    }
}
