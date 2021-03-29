"use strict";

var myH1 = document.getElementsByTagName("h1")[0];

console.log(myH1);

myH1.innerHTML = "My First JavaScript page";

myH1.style.color = "Red";

//myBoard.innerHTML = "<div><p>box in box</p></div>";

//myBoard.innerHTML = ""; //will remove the div and p from the previus line

var myButtonCreate = document.getElementById("createTTTB");

myButtonCreate.addEventListener("click", makeTicTacToeBoard);

//makeTicTacToeBoard();

function makeTicTacToeBoard() {

    var myBoard = document.getElementById("board");

    myBoard.style.backgroundColor = "gray";
    myBoard.style.height = "300px";
    myBoard.style.width = "300px";
    myBoard.style.border = "3px solid black";

    myBoard.innerHTML = "";//clean the board

    var myGreenCube;
    var myRedCube;

    for (let amount = 0; amount < 9; amount++) {
        //console.log(amount);
        if (amount % 2 == 0) {
            myRedCube = document.createElement("div");
            myRedCube.className = "redCube";
            myRedCube.innerHTML = amount;
            myBoard.appendChild(myRedCube);
        }
        else {
            myGreenCube = document.createElement("div");
            myGreenCube.className = "greenCube";
            myGreenCube.innerHTML = amount;
            myBoard.appendChild(myGreenCube);
        }

    }

}