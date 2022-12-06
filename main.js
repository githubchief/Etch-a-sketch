//button obj to select grid size
let gridButton = document.getElementById("grid-size");

//obj for the grid container
let container = document.getElementById("container");


createGrid(16);
//event listener to get the prompt input from user when user clicks on grid-size button
gridButton.addEventListener("click", handleGridSizeClick);


//function to handle grid size button click
function handleGridSizeClick(event) {


    
    //prompt to get grid size
    gridSize = prompt("Enter the grid size: between 16 and 99");
    console.log(gridSize);
    
    //call the function to create grid of size gridSize
    createGrid(gridSize);
  }
  
function createGrid(size) {

    removeChildren(container);
    gridCubeSize=(960/size)-2;
    let count=(size*size);
    for (let i=0; i<count;i++) {
        const square=document.createElement("div");
        square.classList.add(`square`);
        square.style.width=`${gridCubeSize}px`;
        square.style.height=`${gridCubeSize}px`;
        container.appendChild(square);
    }
    
}


function removeChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

//button obj to clear canvas
let clearSignal=document.getElementById("clear");

//event listener to listen when user clicks on clear canvas
clearSignal.addEventListener("click", handleClearClick)

//function to handle click clear button
function handleClearClick(event) {

    //change background-color of divs in the container to white
    
}

