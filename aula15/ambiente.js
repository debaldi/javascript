let num = [ 8, 3, 5, 9]

console.log(num)

// Adicionando valor informando o indice
num[4] = 2 

// Adicionando valor na última posição
num.push(7) 

// Saber o Comprimento do Array
let tamanho = num.length
console.log(`O valor do vetor é: ${num}`)

// Ordem Crescente
num.sort()

console.log(`Em ordem crescente é: ${num}`)
console.log(`O tamanho do vetor é: ${tamanho}`)

// Buscando Valores dentro do Array
// Retornar valor -1 é porque não foi encontrado o valor pesquisado
let pos = num.indexOf(10)
if (pos == -1){
    console.log('O Valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}

console.log('')

// FOR Normal
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('')

// FOR Simplificado
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}