const prompt = require("prompt-sync")();

//Produto
const produto = {
    laranja: 30,
    cachoUva: 50,
    abacaxi: 12,
    melancia: 5,
    goiaba: 90
}

console.log(`O objeto "produto" representa a quantidade de frutas numa caixa:\n`,produto,`\n`)

//Função de filtragem
function criaProduto(produto) {
    const dadosNovoProduto = {}
    const quantidade = Number(prompt(`Numero para filtragem: `))
    for (const propriedade in produto) {
        if (produto[propriedade] >= quantidade) {
            dadosNovoProduto[propriedade] = produto[propriedade]
        }
    }
    return dadosNovoProduto;
}

//Novo produto recebe os dados da filtragem
const novo = criaProduto(produto)

console.log(`\nNovo produto (caixa):\n`,novo)