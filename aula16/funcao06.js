//Fatorial de maneira Recursiva é onde uma função chama ela mesma.

function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))


/*
Fatorial Tradicional
5! = 5 x 4 x 3 x 2 x 1

Fatorial Recursivo
O Fatorial de um número pode ser baseado no fatorial de outro número

Ex:
5! = 5 x 4!

Fatorial de n é sempre n * n-1 fatorial
n! = n * (n-1)!

Fatorial de 1 é 1
1! = 1
*/
