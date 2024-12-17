function calcularRank(vitorias, derrotas) {
    let totalVitorias = vitorias - derrotas;
    
    let rank;

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

       console.log(`O Herói tem um total de ${totalVitorias} está no rank de ${rank}`);

   return { totalVitorias, rank };
}

// Testando a função
let resultado = calcularRank(25, 10); // Exemplo: 25 vitórias e 10 derrotas
