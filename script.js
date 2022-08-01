const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");


createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

let colorButton = document.getElementById('color');
let colorPicker = document.getElementById('colorPicker');
let currentColor = colorPicker.value;

colorButton.addEventListener('click', () => {
    currentColor = colorPicker.value;
})

let clicked = false;

const square = document.querySelector("div");
square.addEventListener("click", function(e) {
    clicked = !clicked;
    if(clicked == true){
        square.addEventListener("mouseover", function(event) {
            //   event.target.classList.replace("square", "color");
            event.target.style.backgroundColor = currentColor;
            });
    }else{
        square.addEventListener("mouseover", function(event) {
            //   event.target.classList.replace("square", "color");
            if(event.target.style.backgroundColor === currentColor){
                // do nothing
            }else{
                event.target.style.backgroundColor = 'white';
            }
            });
    }
})


userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});

createGrid();