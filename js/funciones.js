let a;

function badAnswer(){
    document.getElementById("1").style.display="inline";
}

function goodAnswer(){
    document.getElementById("2").style.display="inline";
}
  

function badAnswer3(){
    document.getElementById("1").style.display="inline";
    a = 1;
    return a;    
}

function goodAnswer3(){
    document.getElementById("2").style.display="inline";
    a = 2;
    return a;
}
  

function badAnswer23(){
    document.getElementById("4").style.display="inline";
    if(a==1){
        document.getElementById("6").style.display="inline";
    }
    else{
        document.getElementById("6").style.display="inline";
    }
}

function goodAnswer23(){
    document.getElementById("3").style.display="inline";
    if(a==2){
        document.getElementById("5").style.display="inline";
    }
    if(a==1){
        document.getElementById("7").style.display="inline";
    }
}

function a1(){
    document.getElementById("e1").style.display="inline";
}

function b1(){
    document.getElementById("e2").style.display="inline";
}

function c1(){
    document.getElementById("e3").style.display="inline";
}

function d1(){
    document.getElementById("e4").style.display="inline";
}

function e1(){
    document.getElementById("e5").style.display="inline";
}

function f1(){
    document.getElementById("e6").style.display="inline";
}


function bad(){
    document.getElementById("3extra").style.display="inline";
}

function good(){
    document.getElementById("2extra").style.display="inline";
}

function bad2(){
    document.getElementById("5extra").style.display="inline";
}

function good2(){
    document.getElementById("4extra").style.display="inline";
}