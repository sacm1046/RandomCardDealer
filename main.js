function randomCard(){
    let sup=document.getElementById("sup");  
    let mid=document.querySelector("#mid");    
    let inf=document.querySelector("#inf");
    
    var a = randomSymbol();

    let h1Sup= document.createElement('h1');
    sup.appendChild(h1Sup);
    sup.innerHTML=a;
    sup.classList.add(color(a));

    let h1Mid= document.createElement('h1');
    mid.appendChild(h1Mid);
    mid.innerHTML=randomNumber();
    mid.classList.add(color(a));

    let h1Inf= document.createElement('h1');
    inf.appendChild(h1Inf);
    inf.innerHTML=a;
    inf.classList.add(color(a));

    
    
    console.log(a);
}

function randomNumber(){
    switch(Math.floor(Math.random()*13)){
        case 0: return "A";
        case 1: return "2";
        case 2: return "3";
        case 3: return "4";
        case 4: return "5";
        case 5: return "6";
        case 6: return "7";
        case 7: return "8";
        case 8: return "9";
        case 9: return "10";
        case 10: return "J";
        case 11: return "Q";
        case 12: return "K";
    }
}

function randomSymbol(){
    switch(Math.floor(Math.random()*4)){
        case 0: return "♠";
        case 1: return "♣";
        case 2: return "♥";
        case 3: return "♦";
    }
}

function color(random){
    if(random=="♠"||random=="♣"){return "text-body";}
    else{return "text-danger";}
}