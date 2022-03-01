//OBJETO

let amigo = {
    nome: 'Emerson', 
    idade: 34, 
    sexo: 'M', 
    peso: 84.5,

    engordar(p=0){        
        this.peso += p
        console.log(`Engordou ${p}kg.`)
    }
}

amigo.engordar(2)
console.log(`O amigo ${amigo.nome} pesa ${amigo.peso}kg.`)