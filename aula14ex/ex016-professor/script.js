function contar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    
    var inicio = parseInt(txtinicio.value)
    var fim = parseInt(txtfim.value)
    var passo = parseInt(txtpasso.value)

// Validações 
    if(txtinicio.value.length == 0){
        window.alert('Verefique o valor de início')
    }else if(parseInt(txtpasso.value) == 0){
        window.alert('Valor de Passo não pode ser 0(zero)')

// Caso o campo Passo esteja sem valor ele recebe o valor de Inicio
    }else if(txtpasso.value.length == 0){
        window.alert('Valor de Passo pegado de valor Inicial')
        passo = inicio
               
        res.innerHTML = 'Contando: <br>'    
        
        while(inicio <= fim){            
            res.innerHTML += `${inicio} `            
            inicio += passo
        }        
        res.innerHTML += '!.'
        
// Se todas as Validações forem False
    }else{
        res.innerHTML = 'Contando: <br>'
// Se Inicio for maior que o fim        
        if(inicio < fim){
            while(inicio <= fim){ 
                res.innerHTML += `${inicio} `
                inicio += passo
            } 
// Se Fim for maior que Inicio                       
        }else{
            while(inicio >= fim){
                
                res.innerHTML += `${inicio} `
                inicio -= passo
            }
           
        }
        res.innerHTML += '!'
    }
}