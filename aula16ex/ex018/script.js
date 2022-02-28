// Cia um vetor vazio
let vetorNum = []


function adicionar(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let selnum = document.getElementById('selnum')

    //Criando um elemento <option> dentro do select
    let item = document.createElement('option')        

    //Criando o elemento item dentro do <option> no select
    selnum.appendChild(item)
 
    //Adicionando o numero digitado dentro do elemento item no select
    item.text += num.value

    //Apaga o que esta no input num
    num.value = ''

    //Números adicionados no ultimo elemento do vetor
    vetorNum.push(num.value)

    //Contando quantos elementos tem dentro do vetor
    let tamanho = vetorNum.length
    res.innerText = tamanho

}