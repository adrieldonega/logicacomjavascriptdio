//Criar uma function que pega somente a primeira parte do nome de uma pessoa.

let userName = getFirstName ("Adriel-da-Silva-Donegá", "-")
    console.log("Seja bem vindo " + userName)

    userName = getFirstName ("Natalia Lis Camargos Donega", " ")
    console.log("Seja bem vindo " + userName)


function getFirstName(name, splitchar){
    let firstName = name.split(splitchar)[0] //split que os espaços do nome 
    return firstName
}
