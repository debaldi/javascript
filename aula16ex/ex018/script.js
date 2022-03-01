// Cia um vetor vazio
let vetorNum = []

let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let selnum = document.getElementById('selnum')

function adicionar(){
    /*
    Verificando se já existe o número digitado dentro do vetor
    se já contém o número digitado dentro do vetor, a variavel numDiferente recebe false
    se o número digitado não tiver dentro do vetor, a variavel numDiferente recebe true
    */
    let numDiferente = true

    for(let pos in vetorNum){
        if(vetorNum[pos] == num.value){
            numDiferente = false
        window.alert(`Já Existe o número ${vetorNum[pos]} cadastrado!`)
        } 
    }

    //Verificando se o número digitado esta entre 1 e 100
    if( Number(num.value) < 1 || Number(num.value) > 100 ){
        window.alert('Somente Números entre 1 e 100!')
    
    //Se acaso o número digitado não existir dentro do vetor e estiver entre 1 e 100
    } else if (numDiferente == true) {
        
        //Criando um elemento <option> dentro do select
        let item = document.createElement('option')        

        //Criando o elemento item dentro do <option> no select
        selnum.appendChild(item)
    
        //Adicionando o numero digitado dentro do elemento item no select
        item.text += `Valor ${num.value} Adicionado.`

        let numInt = Number(num.value)

        //Números adicionados no ultimo elemento do vetor
        vetorNum.push(numInt)

        //MOSTRANDO DADOS VETOR
        /*res.innerHTML = `Vetor ${vetorNum} <br>`
        res.innerHTML += `Inteiro ${numInt} <br>`
        res.innerHTML += `tipo ${typeof(numInt)} <br>`
        */

        //Apaga o que esta no input num 
        num.value = ''
       
    }
}

function finalizar(){
    //Se o vetor não contiver números dentro dele e tentar clicar em finalizar
    if( vetorNum.length == 0){
        window.alert('Adicione valores antes de Finalizar')

    } else {
        //Contando quantos elementos tem dentro do vetor
        let tamanho = vetorNum.length
        
        //Maior Valor
        let maior = Math.max(...vetorNum)

        //Menor Valor
        let menor = Math.min(...vetorNum)

        //Somando todos os valores do Vetor
        let soma = 0
        for(let pos in vetorNum){
            soma += vetorNum[pos]
        }        

        //Média dos números   
        let media = soma / vetorNum.length

        //Resultados impressos na tela
        res.innerHTML = `Ao Todo temos ${tamanho} números cadastrados. <br>`
        res.innerHTML += `O Maior Número Informador foi ${maior}. <br>`
        res.innerHTML += `O Menor Número Informador foi ${menor}. <br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}.<br>` 
        res.innerHTML += `A média dos valores digitados é ${media}.`        
    }
}