function gerar(){
    var txtnum = document.getElementById('txtnum')
    var res = document.querySelector('td#res')

    var numero = parseInt(txtnum.value)
    var calc = 0;

    if(txtnum.value.length == 0){
        window.alert('Campo Número não pode estar Vazio!')
    }else{
        res.innerHTML = `Tabuada do ${numero}: <br><br>`
        for (var c = 1; c <= 10; c++){

            calc = c * numero
        
            res.innerHTML += `${numero} x ${c} = ${calc} <br>`
        }
    }
}