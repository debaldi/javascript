//Pegando o horário do Computador
var horaAgora = new Date()
var hora = horaAgora.getHours()

console.log(`Agora é ${hora}hrs`)

if(hora < 12){
    console.log('Bom Dia!')
}else if(hora < 18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}