function adicionar(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('res')
    let selnum = document.getElementById('selnum')

    let vetorNum = []

    vetorNum.push(num.value) 

    let item = document.createElement('option')    
    
    item.text = vetorNum

    selnum.appendChild(item)

    num.value = ''
}