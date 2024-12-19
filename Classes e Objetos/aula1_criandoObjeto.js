class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "nutella")
let boloPremium = new formaDeBolo("baunilia", "coco")

//console.log(boloFesta)
//console.log(boloFesta.saborRecheio)

boloFesta.escrever()
boloPremium.escrever()