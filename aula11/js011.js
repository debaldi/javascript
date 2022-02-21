function nacionalidade(){
    var pais = window.document.getElementById('txtNacio')
    var res = document.getElementById('res')

    if(pais.value.toUpperCase() == 'BRASIL'){
        res.innerHTML = `<p>Você é Brasileiro</p>`
    }else{
        res.innerHTML = `<p>Você é Estrangeito</p>`
    }
}