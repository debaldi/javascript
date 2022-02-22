//Pegando o dia da Semana do Computador
var semanaAgora = new Date()
var diaSem = semanaAgora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = QUinta
    5 = Sexta
    6 = Sábado
*/

// Dia da Semana em Números
console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabádo')
        break
    default:
        console.log('[ERRO] Valor Inválido!')
        break
}