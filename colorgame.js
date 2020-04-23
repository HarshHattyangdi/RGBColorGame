let colors=[];
let pickedColor
let numSquares = 6;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay=document.querySelector("#message");
let h1=document.querySelector("h1");
let resetButton=document.getElementById("reset");
let modeButtons=document.querySelectorAll(".mode");

init();

function init() {
    // mode button event listners
   setUpModeButtons();

    setUpSquares();

    reset();
}

function reset() {
    // generate random color 
    colors = generateRandomColors(numSquares);

    // pick a new random color
    pickedColor = pickColor();

    // change color display to match picked color
    colorDisplay.textContent = pickedColor;

    // change color of squares
    for (let index = 0; index < squares.length; index++) {
        if(colors[index]){
            squares[index].style.display="block"
            squares[index].style.backgroundColor = colors[index];
        }
        else{
            squares[index].style.display="none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click",function () {
    reset();
});

function setUpModeButtons() {
    for (let index = 0; index < modeButtons.length; index++) {
        modeButtons[index].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });


        // figure out how many squares to show
        // pick new color
        // pick a new pickedcolor
        // update page to reflect changes
    }
}

function setUpSquares() {
    for (let index = 0; index < squares.length; index++) {
        //add event listeners to square
        squares[index].addEventListener("click", function (params) {
            //grab color of picked color
            let clickedColor = this.style.backgroundColor;
            // compare clicked color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function changeColors(color) {
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor=color;
        
    }
}

function pickColor() {
    let random=Math.floor(Math.random()*colors.length);

    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr=[];

    //repeat num times
    for (let index = 0; index < num; index++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    //return arr
    return arr;  
}

function randomColor() {
    // pick red from 0-255
    let r=Math.floor(Math.random()*256)

    // pick green from 0-255
    let g = Math.floor(Math.random() * 256)

    // pick blue from 0-255
    let b = Math.floor(Math.random() * 256)

    return "rgb("+r+", "+g+", "+b+")";

}