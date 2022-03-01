let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

//Criando Vetor vazio
let valores = []

num.innerText = ''

//Validando Números entre 1 e 100
function isNumero(n){
    if( Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else {
        return false
    }
}

//Válidando se o valor digitado já está cadastrado no vetor
function isLista(n, l){
    if( l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar(){
    //Validando Números entre 1 e 100 e se o número digitado já esta cadastrado ou não dentro no vetor, mas depende das functions isNumero e isLista retornarem true
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
        
    } else {
        //Se acaso uma das functions isNumero e isLista retornar false        
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    //Apagando e deixando o foco no campo input 
    num.value = ''
    num.focus()
}

function finalizar(){
    //Validando para não finalizar sem valores dentro do vetor
    if( valores.length == 0 ){
        window.alert('Adicione valores para finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //FOR para ver qual o MENOR/MAIOR valor, e para somar todos os números cadastrados
        for(let pos in valores){

            //Soma dos números cadastrados
            soma += valores[pos]
            
            //Adicionando os valores maiores e menores nas variaveis menor e maior
            if( valores[pos] >  maior ){
                maior = valores[pos]
            }
            if( valores[pos] < menor ){
                menor = valores[pos]
            }            
        }
        
        //Média dos números cadastrados
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}.</p>`
        res.innerHTML += `<p>A média dos números é ${media}.</p>`
    } 
}