function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var resVel = document.querySelector('div#resVel')
    
    // Faz o tratamento da variavel txtv para converter de String para Números
    var velocidade = Number(txtv.value)


    resVel.innerHTML = `<p>A Velocidade do seu carro é <strong> ${velocidade}km/h </strong></p>`

    if (velocidade > 80 ){
        resVel.innerHTML += '<p>Você ultrapassou a velocidade permitida de 80km/h. <strong> MULTADO</strong> </p>'
    }

    resVel.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'
}

function nacionalidade(){
    var pais = window.document.getElementById('txtNacio')
    var resNac = document.getElementById('resNac')

    if(pais.value.toUpperCase() == 'BRASIL'){
        resNac.innerHTML = `<p>Você é Brasileiro</p>`
    }else{
        resNac.innerHTML = `<p>Você é Estrangeito</p>`
    }
}