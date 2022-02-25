function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por Favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1

        // Antes de mostrar a tabuada, limpa o select
        tab.innerHTML = ''

        while( c <= 10){
            //Criando Elemento option dentro de select
            let item = document.createElement('option')

            //Para saber qual item foi selecionado "Útil para outras linguagens"
            item.value = `tab${c}`

            item.text = `${n} x ${c} = ${n*c}`
            
            //Adicionando elemento Filho item dentro do option
            tab.appendChild(item)

            c++
        }
    }
}