

function createDiv(flavour){
    var a = document.createElement('div')
    a.setAttribute('id','cakeBlock')
    a.innerHTML=""
    switch(flavour){
        case "chocolate":
            a.style.backgroundColor = "brown"
            a.style.width="200px"
            a.style.height="20px"
            break
        case "strawberry":
            a.style.backgroundColor = "pink"
            a.style.width="170px"
            a.style.height="20px"
            break
        case "butterscotch":
            a.style.backgroundColor = "yellow"
            a.style.width="140px"
            a.style.height="20px"
            break
        case "vannila":
            a.style.backgroundColor = "aliceblue"
            a.style.width="115px"
            a.style.height="20px"
            break
        case "redvelvet":
            a.style.backgroundColor = "red"
            a.style.width="95px"
            a.style.height="20px"
            break
    }
    return a;
}





var total = 0;

const target = document.getElementById("tar")


function addFlavour(flavour){
    var b = document.createElement('p')
    switch(flavour){
        case "chocolate":
            total+=300
            b.innerHTML="Chocolate-----300"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "strawberry":
            total+=100
            b.innerHTML="Strawberry----100"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "butterscotch":
            total+=200
            b.innerHTML="ButterScotch---200"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "vannila":
            total+=250
            b.innerHTML="Vannila-----250"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "redvelvet":
            total+=350
            b.innerHTML="RedVelvet-----350"
            document.getElementById("rightSide").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
    }
}



function calTotal(){
    var cho = document.createElement('p')
    cho.innerHTML = "Total : " + total
    cho.style.color="green"
    document.getElementById("rightSide").appendChild(cho)
    var candle = document.createElement('img')
    candle.setAttribute('src','assets/candle.png')
    candle.setAttribute('id','candle')
    target.appendChild(candle)
}

function reset(){
    const first = document.getElementById("rightSide").firstElementChild
    document.getElementById("rightSide").innerHTML = ""
    
    var div = document.getElementById('tar');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    total = 0
    document.getElementById("rightSide").appendChild(first)   
}