//Creates a constant named "buttonX" that is created when '.boxX' is selected on the page
const button1 = document.querySelector('.box1');
const button2 = document.querySelector('.box2');
const button3 = document.querySelector('.box3');
const button4 = document.querySelector('.box4');
const button5 = document.querySelector('.box5');
const button6 = document.querySelector('.box6');
const button7 = document.querySelector('.box7');
const button8 = document.querySelector('.box8');
const button9 = document.querySelector('.box9');

//Creates a constant named "newgame" that is created when the new game button is clicked
const newgame = document.querySelector('.input');

//creates a "counter" variable that acts as the main counter for the game (counts number of turns);
var counter = 0;

//Needed in order to create a boolean type of value for the functions below;
var val1 = 0;
var val2 = 0;
var val3 = 0;
var val4 = 0;
var val5 = 0;
var val6 = 0;
var val7 = 0;
var val8 = 0;
var val9 = 0;


//Needed in order for the win condition to complete sucessfully;
var ans1 = "";
var ans2 = "";
var ans3 = "";
var ans4 = "";
var ans5 = "";
var ans6 = "";
var ans7 = "";
var ans8 = "";
var ans9 = "";

//Score variables
var scoreX = 0;
var scoreO = 0;


//Button is clicked and the screen refreshes;
newgame.onclick = function(){
    alert("New Game Started");
    window.location.reload()
}

//game counter reaches 9, and assumes no-winners were made
function endgame(){
    alert("CAT!");
    window.location.reload();

}

//function containing other win condition functions
function checkwin(){
    horizontalwin1();
    horizontalwin2();
    horizontalwin3();
    verticalwin1();
    verticalwin2();
    verticalwin3();
    diagonalwin1();
    diagonalwin2();
}

//Add score to text box
function addScoreX(){
    ans = 0;
    var addX = parseInt(document.getElementsByClassName("playerXScore").value);
    ans = addX+1;

}


//When button is clicked, it first adds 1 to valX, the in game counter adds 1, if the counter is not even a "X" string is put into the box, if odd a "O" string.  
//If the counter = 9, the game ends as a "CAT."  It then checks the win condition functions
button1.onclick = function(){
    val1 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box1").textContent = "X";
        ans1 = "X";
    }
        else{
            document.querySelector(".box1").textContent = "O"; 
            ans1 = "O";
        }
    button1.onclick = false;
    if(counter == 9){
        
        endgame();
        return;
    }
    checkwin();
}
button2.onclick = function(){
    val2 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box2").textContent = "X";
        ans2 = "X";
    }
        else{
            document.querySelector(".box2").textContent = "O"; 
            ans2 = "O";
        }
    button2.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button3.onclick = function(){
    val3 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box3").textContent = "X";
        ans3 = "X";
    }
        else{
            document.querySelector(".box3").textContent = "O"; 
            ans3 = "O";
        }
    button3.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button4.onclick = function(){
    val4 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box4").textContent = "X";
        ans4 = "X";
    }
        else{
            document.querySelector(".box4").textContent = "O";
            ans4 = "O";
        }
    button4.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button5.onclick = function(){
    val5 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box5").textContent = "X";
        ans5 = "X";
    }
        else{
            document.querySelector(".box5").textContent = "O"; 
            ans5 = "O";
        }
    button5.onclick = false;  
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button6.onclick = function(){
    val6 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box6").textContent = "X";
        ans6 = "X";
    }
        else{
            document.querySelector(".box6").textContent = "O"; 
            ans6 = "O";
        }
    button6.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button7.onclick = function(){
    val7 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box7").textContent = "X";
        ans7 = "X";
    }
        else{
            document.querySelector(".box7").textContent = "O";
            ans7 = "O";
        }
    button7.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button8.onclick = function(){
    val8 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box8").textContent = "X";
        ans8 = "X";
    
    }
        else{
            document.querySelector(".box8").textContent = "O";
        ans8 = "O";
        }
    button8.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}
button9.onclick = function(){
    val9 = 1;
    counter = counter + 1;
    if (counter%2 !=0){
        document.querySelector(".box9").textContent = "X";
        ans9 = "X";
    }
        else{
            document.querySelector(".box9").textContent = "O";
            ans9 = "O"; 
        }
    button9.onclick = false;
    if(counter == 9){
        endgame();
        return;
    }
    checkwin();
}

//various win conditions that check the string inside of the box.  It determines if the string is all "X"'s or all "O".  After the win condition it reloads the page.
function horizontalwin1(){
    if(ans1 == "X" && ans2 == "X" && ans3 == "X"){
        alert("1Player X Wins Horizontal!");
        window.location.reload()
    }
    else if(ans1 == "O" && ans2 == "O" && ans3 == "O"){
    alert("2Player O Wins Horizontal!");
    window.location.reload();
    }
}
function horizontalwin2(){
    if(ans4 == "X" && ans5 == "X" && ans6 == "X"){
        alert("3Player X Wins Horizontal!");
        window.location.reload();
        }
    else if(ans4 == "O" && ans5 == "O" && ans6 == "O"){
    alert("4Player O Wins Horizontal!");
    window.location.reload();
    }

}
function horizontalwin3(){
    if(ans7 == "X" && ans8 == "X" && ans9 == "X"){
        alert("5Player X Wins Horizontal!");
        window.location.reload();
    }
    else if(ans7 == "O" && ans8 == "O" && ans9 == "O"){
    alert("6Player O Wins Horizontal!");
    window.location.reload();
    }   
}    
function verticalwin1(){
        if(ans1 == "X" && ans4 == "X" && ans7 == "X"){
        alert("7Player X Wins Vertical");
        window.location.reload();
        }
        else if(ans1 == "O" && ans4 == "O" && ans7 == "O"){
        alert("8Player O Wins Vertical");
        window.location.reload();
        }
    }
function verticalwin2(){
    if(ans2 == "X" && ans5 == "X" && ans8 == "X"){
        alert("9Player X Wins Vertical");
        window.location.reload();
        }
        else if(ans2 == "O" && ans5 == "O" && ans8 == "O"){
        alert("10Player O Wins Vertical");
        window.location.reload();
        }
}
function verticalwin3(){
    if(ans3 == "X" && ans6 == "X" && ans9 == "X"){
        alert("11Player X Wins Vertical");
        window.location.reload();
        }
        else if(ans3 == "O" && ans6 == "O" && ans9 == "O"){
        alert("12Player O Wins Vertical");
        window.location.reload();
        }

}           
function diagonalwin1(){
    if(ans1 == "X" && ans5 == "X" && ans9 == "X" ){
        alert("13Player X Diagonal Win");
        window.location.reload();
        }
        else if(ans1 == "O" && ans5 == "O" && ans9 == "O"){
        alert("14Player O Diagonal Win");
        window.location.reload();
        }
    }
function diagonalwin2(){
    if(ans3 == "X" && ans5 == "X" && ans7 == "X"){
        alert("15Player X Diagonal Win");
        window.location.reload();
        }
        else if(ans3 == "O" && ans5 == "O" && ans7 == "O"){
        alert("16Player O Diagonal Win");
        window.location.reload();
        }
}        

