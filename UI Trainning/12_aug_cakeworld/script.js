

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
        
        case "butterscotch":
            a.style.backgroundColor = "yellow"
            a.style.width="200px"
            a.style.height="20px"
            break
        case "Pista":
            a.style.backgroundColor = "green"
            a.style.width="200px"
            a.style.height="20px"
            break
        case "strawberry":
            a.style.backgroundColor = "pink"
            a.style.width="200px"
            a.style.height="20px"
            break
        case "Blackcurren":
            a.style.backgroundColor = "purple"
            a.style.width="200px"
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
            total+=70
            b.innerHTML="Chocolate-----70"
            document.getElementById("amount").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        
        case "butterscotch":
            total+=100
            b.innerHTML="ButterScotch---100"
            document.getElementById("amount").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
            case "Pista":
            total+=60
            b.innerHTML="Pista----60"
            document.getElementById("amount").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "strawberry":
            total+=50
            b.innerHTML="strawberry-----50"
            document.getElementById("amount").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
        case "Blackcurren":
            total+=150
            b.innerHTML="Blackcurren-----150"
            document.getElementById("amount").appendChild(b)
            var f = createDiv(flavour)
            target.appendChild(f)
            break
    }
}



function calTotal(){
    var cho = document.createElement('p')
    cho.innerHTML = "Total : " + total
    cho.style.color="green"
    document.getElementById("amount").appendChild(cho)
    var candle = document.createElement('img')
    candle.setAttribute('src','assets/candle.png')
    candle.setAttribute('id','candle')
    target.appendChild(candle)
}

function reset(){
    const first = document.getElementById("amount").firstElementChild
    document.getElementById("amount").innerHTML = ""
    
    var div = document.getElementById('tar');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    total = 0
    document.getElementById("amount").appendChild(first)   
}
