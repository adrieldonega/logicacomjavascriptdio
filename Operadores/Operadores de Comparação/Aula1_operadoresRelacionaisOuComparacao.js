//Igual ou Diferente

// = é atribuição
// == compara o valor
// === compara o valor e o tipo de dado

let numero = "1"
console.log(numero === 1)

//Diferente
let marca = "Apple"
let resultado = marca !== "Samsung"
console.log(resultado)

//Sistema de Embarque de Voos, e existe uma pessoa com o CPF cassado
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)

//Temos uma passagem que somente um usuario pode usar.
let CPFPermitido = "222.555.333-01"
let CPFUsuario = "222.555.333-02"

let ehBloqueado = CPFUsuario !== CPFPermitido
console.log("É um usuario invalido? " +ehBloqueado)


