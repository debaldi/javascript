function parimpar(n){
    if (n%2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

// Mostrando restultado dentro de uma váriavel
let res = parimpar(4)
console.log(res)

// Mostrando resultado direto na console
console.log(parimpar(5))