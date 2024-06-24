class Hero{

    constructor(name, age, type){

        this.name = name
        this.age = age
        this.type = type
    }

    heroAttack(name, type){

        let attack = " "
        
        switch(type){
            case "Guerreiro":

                attack = "Espada."

            break
            case "Mago":

                attack = "Magia."
                
            break
            case "Monge":

                attack = "Artes Marciais."
                
            break
            case "Ninja":

                attack = "Shuriken."
                
            break
            default : " Nenhum Heroi encontrado"
        }


        return console.log(` O ${type} ataca usando ${attack}`)
    }
}

let guerreiro = new Hero()
let mago = new Hero()
let monge = new Hero()
let ninja = new Hero()

guerreiro.heroAttack("Orion", "Guerreiro")
mago.heroAttack("Rune", "Mago")
monge.heroAttack("Drake", "Monge")
ninja.heroAttack("Idril", "Ninja")