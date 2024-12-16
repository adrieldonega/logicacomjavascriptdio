let pokemon = ["Pikachu" , "Charmander" , "Squirtle" , "Bulbasaur"]

console.log(pokemon[0])
console.log(pokemon[1])
console.log(pokemon[2])
console.log(pokemon[3])

console.log("Entendendo metodos e funções \n")

pokemon.pop()
console.log(pokemon +"\n") //Remove o ultimo elemento do array

pokemon.shift()
console.log(pokemon +"\n") //Remove o primeiro elemento do array

pokemon.splice(1,1)
console.log(pokemon +"\n")//Remove o segundo elemento do array

pokemon.push("Zapdos")
console.log(pokemon)//Adiciona um elemento no array


