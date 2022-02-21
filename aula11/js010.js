function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var res = document.querySelector('div#res')
    
    // Faz o tratamento da variavel txtv para converter de String para Números
    var velocidade = Number(txtv.value)


    res.innerHTML = `<p>A Velocidade do seu carro é <strong> ${velocidade}km/h </strong></p>`

    if (velocidade > 80 ){
        res.innerHTML += '<p>Você ultrapassou a velocidade permitida de 80km/h. <strong> MULTADO</strong> </p>'
    }

    res.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'

    
}