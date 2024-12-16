//OR || 
//O personagem só pode sair da casa dele se nao estiver chovendo OU se ele estiver utilizando um guarda chuva.

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log("Nosso personagem pode sair? " + podeSair)
