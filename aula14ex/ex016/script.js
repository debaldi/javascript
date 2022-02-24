function contar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    
    var inicio = parseInt(txtinicio.value)
    var fim = parseInt(txtfim.value)
    var passo = parseInt(txtpasso.value)

    if(txtinicio.value.length == 0){
        window.alert('Verefique o valor de início')
    }else if(parseInt(txtfim.value) < parseInt(txtinicio.value) || txtfim.value.length == 0){
        window.alert('O Valor Final não pode ser Menor que o Valor Inicial e nem estar Vazio!')
    }else if(parseInt(txtpasso.value) == 0){
        window.alert('Valor de Passo não pode ser 0(zero)')
    }else if(txtpasso.value.length == 0){

        passo = inicio
       
        res.innerHTML = 'Valor de Passo pegado de valor Inicial! <br>'
        res.innerHTML += 'Contando: <br>'    
        
        while(inicio <= fim){            
            res.innerHTML += `${inicio} `            
            inicio += passo
        }        
        res.innerHTML += '!.'
    }else{
        
        res.innerHTML = 'Contando: <br>'            
        while(inicio <= fim){            
            res.innerHTML += `${inicio} `            
            inicio += passo
        }        
        res.innerHTML += '!'
    }
} 