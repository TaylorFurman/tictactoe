const button1 = document.querySelector('.box1');
const button2 = document.querySelector('.box2');
const button3 = document.querySelector('.box3');
const button4 = document.querySelector('.box4');
const button5 = document.querySelector('.box5');
const button6 = document.querySelector('.box6');
const button7 = document.querySelector('.box7');
const button8 = document.querySelector('.box8');
const button9 = document.querySelector('.box9');
const newgame = document.querySelector('.input');


var counter = 0;
var val1 = 0;
var val2 = 0;
var val3 = 0;
var val4 = 0;
var val5 = 0;
var val6 = 0;
var val7 = 0;
var val8 = 0;
var val9 = 0;



newgame.onclick = function(){
    alert("New Game Started");
    window.location.reload();
}

function endgame(){
    alert("Game Over!");
    window.location.reload();
}

function win(){
    alert("you win");
    window.location.reload();
}

function changecolor(){
    console.log("");
}


function wincondition(){
    if(val1 == 1 && val2 == 1 && val3 == 1){
        alert("super");
        window.location.reload();
    }
    else if(val4 == 1 && val5 == 1 && val6 == 1){
        alert("super");
        window.location.reload();
    }
    else if(val7 == 1 && val8 == 1 && val9 == 1){
        alert("super");
        window.location.reload();
    }
    else if(val1 == 1 && val4 == 1 && val7 == 1){
        alert("super");
        window.location.reload();
    }
    else if(val2 == 1 && val5 == 1 && val8 == 1){
        alert("super");
        window.location.reload();
    }
    else if(val3 == 1 && val6 == 1 && val9 == 1){
        alert("super");
        window.location.reload();
    }
    else if(val1 == 1 && val5 == 1 && val9 == 1){
        alert("super");
        window.location.reload();
    }else if(val3 == 1 && val5 == 1 && val7 == 1){
        alert("super");
        window.location.reload();
    }
}



button1.onclick = function(){
    counter = counter + 1;
    button1.onclick = false;
    val1 = 1;
    wincondition();
    changecolor();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}

button2.onclick = function(){
    counter = counter + 1;
    button2.onclick = false;
    val2 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button3.onclick = function(){
    counter = counter + 1;
    button3.onclick = false;
    val3 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button4.onclick = function(){
    counter = counter + 1;
    button4.onclick = false;
    val4 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button5.onclick = function(){
    counter = counter + 1;
    button5.onclick = false;
    val5 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button6.onclick = function(){
    counter = counter + 1;
    button6.onclick = false;
    val6 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button7.onclick = function(){
    counter = counter + 1;
    button7.onclick = false;
    val7 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button8.onclick = function(){
    counter = counter + 1;
    button8.onclick = false;
    val8 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button9.onclick = function(){
    counter = counter + 1;
    button9.onclick = false;
    val9 = 1;
    wincondition();
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
