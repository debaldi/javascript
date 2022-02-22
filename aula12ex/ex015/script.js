function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) >= ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)                      
        var img = document.querySelector("img#image");   

        if(fsex[0].checked){
            res.innerHTML = `Foi detectado um Homem de ${idade} anos!`

            if(idade >= 0 && idade <= 10){
                //Criança 2012
                img.setAttribute('src', 'crianca-m.png');
            } else if (idade < 21){
                //Jovem 2002 - 2011
                img.setAttribute('src', 'jovem-m.png');
            } else if(idade < 50){
                //Adulto 2001 - 1973
                img.setAttribute('src', 'adulto-m.png');
            } else{
                //Idoso 1972
                img.setAttribute('src', 'idoso-m.png');
            }

        } else if (fsex[1].checked){
            res.innerHTML = `Foi detectado uma Mulher de ${idade} anos!`
            if(idade >= 0 && idade <=10){
                //Criança 2012
                img.setAttribute('src', 'crianca-f.png')
            } else if(idade < 21){
                //Jovem 2002 - 2011
                img.setAttribute('src', 'jovem-f.png')
            } else if(idade < 50){
                //Adulto 2001 - 1973
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //Idoso 1972
                img.setAttribute('src', 'idoso-f.png')
            }
        }
    }
}