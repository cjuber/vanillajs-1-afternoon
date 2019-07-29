let  playArr = []
const whichPlayer =  document.getElementById('player')
const play = (clickedId) => {
 
 const clickedElement = document.getElementById(clickedId)
 
 if(playArr[clickedId] === undefined ){


 if (whichPlayer.innerText === 'X') {
    whichPlayer.innerText = 'O'
    clickedElement.innerText = 'X'
    playArr[clickedId] = 'X'
    console.log(playArr)
    
 } else{

    whichPlayer.innerText = 'X'
    clickedElement.innerText = 'O'
    playArr[clickedId] = 'O'
    console.log(playArr)
 }
}
else {alert('Square already taken. Choose another square')}


const topLeft = playArr[0]
const topMid = playArr[1]
const topRight = playArr[2]
const midLeft = playArr[3]
const midMid = playArr[4]
const midRight = playArr[5]
const botLeft = playArr[6]
const botMid = playArr[7]
const botRight = playArr[8]

if(topLeft !== undefined && topLeft === topMid && topLeft === topRight){
    

    alert(`${topLeft} is the winner!`)
    reset()
    return
    
}
if(midLeft !== undefined && midLeft === midMid && midLeft === midRight){

    alert(`${midLeft} is the winner!`)
    reset()
    return
}
if(botLeft !== undefined && botLeft === botMid && botLeft === botRight){

    alert(`${botLeft} is the winner!`)
    reset()
    return
    
}
if(topLeft !== undefined && topLeft === midLeft && topLeft === botLeft){

    alert(`${topLeft} is the winner!`)
    reset()
    return
}
if(topMid !== undefined && topMid === midMid && topMid === botMid){

    alert(`${topMid} is the winner!`)
    reset()
    return
}
if(topRight !== undefined && topRight === midRight && topRight === botRight){

    alert(`${topRight} is the winner!`)
    reset()
    return
}
if(topLeft !== undefined && topLeft === midMid && topLeft === botRight){

    alert(`${topLeft} is the winner!`)
    reset()
    return
}
if(topRight !== undefined && topRight === midMid && topRight === botLeft){

    alert(`${topRight} is the winner!`)
    reset()
    return
}


let fullBoard = true

for(i=0;i<=8;i++){
if(playArr[i] === undefined){

    fullBoard = false
  }
}
if(fullBoard === true){

alert("It's a CAT's game!")
reset()

}
}

//reset

let reset = () =>{

let tableData = document.getElementsByTagName('td')
console.dir(tableData)
   
    for(i=0;i<=8;i++){
        tableData[i].innerText=''
       
    }

    playArr.splice(0,9)
    console.log(playArr)
    whichPlayer.innerText = 'X'
    console.log(whichPlayer.innerText)
}