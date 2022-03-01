// Cia um vetor vazio
let vetorNum = []

let num = document.getElementById('txtnum')
let res = document.getElementById('res')
let selnum = document.getElementById('selnum')


function adicionar(){
    if(Number(num.value) < 1 || Number(num.value) > 100 ){
        window.alert('Somente Números entre 1 e 100!')
    } else {
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
    //Contando quantos elementos tem dentro do vetor
    let tamanho = vetorNum.length
    
    //Maior Valor
    let maior = Math.max(...vetorNum)

    //Menor Valor
    let menor = Math.min(...vetorNum)

    //Somando todos os valores do Vetor
    let soma = 0
    for(let pos = 0; pos < vetorNum.length ; pos++){
        soma += vetorNum[pos]
    }        

    //Média dos números   
    let media = soma / vetorNum.length

    res.innerHTML = `Ao Todo temos ${tamanho} números cadastrados. <br>`
    res.innerHTML += `O Maior Número Informador foi ${maior}. <br>`
    res.innerHTML += `O Menor Número Informador foi ${menor}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>` 
    res.innerHTML += `A média dos valores digitados é ${media}.`

}