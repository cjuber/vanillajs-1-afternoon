console.log("  The house always wins!")
document.getElementById('diamonds').style.color = 'red'
    document.getElementById('hearts').style.color = 'red'
    document.getElementById('clubs').style.color = 'black'
     document.getElementById('spades').style.color = 'black'

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

let setCard = () => {
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
   
}

let reset = () => {

     document.getElementById('diamonds').style.color = 'red'
    document.getElementById('hearts').style.color = 'red'
    document.getElementById('clubs').style.color = 'black'
     document.getElementById('spades').style.color = 'black'
    
}