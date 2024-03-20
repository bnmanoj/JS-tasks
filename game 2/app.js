const pickColors = () => {
  let colors = [];
  for (let i = 0; i < numSquares; i++) {
    let color = generateColor();
    colors.push(color);
    squares[i].style.backgroundColor = color;
  }
  return colors;
};

const pickColor = () => colors[Math.floor(Math.random() * numSquares)];

const changeSquaresColor = color => {
  for (let i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

const generateColor = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

const reset = () => {
  title.style.backgroundColor = "steelblue";
  resetBtn.innerText = "new colors"
  message.innerText = ""
  colorDisplay.innerText = pickedColor;
  colors = pickColors();
  pickedColor = pickColor();
  colorDisplay.innerText = pickedColor;
}

let numSquares = 6;
const easyBtn = document.querySelector("#easy-btn");
const hardBtn = document.querySelector("#hard-btn");
const resetBtn = document.querySelector("#reset-btn");
const colorDisplay = document.querySelector("#color-display");
const title = document.querySelector("h1");
const message = document.querySelector("#message");
const squares = document.querySelectorAll(".square");
let colors = pickColors();
let pickedColor = pickColor();

colorDisplay.innerText = pickedColor;

easyBtn.addEventListener("click", () => {
  numSquares = 3;
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  reset();
  for (let i = 0; i < squares.length; i++) {
    if (i < colors.length) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", () => {
  numSquares = 6;
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  reset();
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "inline-block";
  }
});

resetBtn.addEventListener("click", () => {
  reset();
  for (let i = 0; i < squares.length; i++) {
    if (i < colors.length) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

for(let i=0; i<squares.length; i++) {
    squares[i].addEventListener('click', () => {
        let clicked = squares[i].style.backgroundColor;
        if(clicked === pickedColor){
            changeSquaresColor(pickedColor)
            title.style.backgroundColor = pickedColor;
            resetBtn.innerText = "reset"
            message.innerText = "You Picked Correctly!"
        } else {
            squares[i].style.backgroundColor = "#232323";
        }
    })
}