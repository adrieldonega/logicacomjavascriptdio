// Usando o módulo readline do Node.js para ler a entrada

const readline = require('readline');

// Criando a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler as entradas
function obterEntrada() {
    return new Promise((resolve) => {
        rl.question('', (input) => resolve(input));
    });
}

// Função de cálculo do imposto
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    } else if (salario >= 1100.01 && salario <= 2500) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

// Função principal
async function main() {
    const valorSalario = parseFloat(await obterEntrada());
    const valorBeneficios = parseFloat(await obterEntrada());

    // Calcula o imposto
    const valorImposto = calcularImposto(valorSalario);

    // Calcula o valor final e imprime com 2 casas decimais
    const saida = valorSalario - valorImposto + valorBeneficios;
    console.log(saida.toFixed(2));

    rl.close();
}

main();
