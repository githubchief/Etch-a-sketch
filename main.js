//button obj to select grid size
let gridButton = document.getElementById("grid-size");

//cointainer obj for the grid container
let container = document.getElementById("container");

//default grid size
createGrid(16);

//event listener to get the prompt input from user when user clicks on grid-size button
gridButton.addEventListener("click", handleGridSizeClick);

//function to handle grid size button click
function handleGridSizeClick(event) {

    //prompt to get grid size
    gridSize = prompt("Enter the grid size: ");
    if (gridSize > 100 ) {
        alert("Enter grid size less than 100");
        //createGrid(16);
        return;
    }
    
    //call the function to create grid of size gridSize
    createGrid(gridSize);
  }

//function to create grid
function createGrid(size) {

    removeChildren(container);

    gridCubeSize=(960/size)-2;
    let count=(size*size);
    for (let i=0; i<count;i++) {
        const square=document.createElement("div");
        square.classList.add(`square`);
        (square).style.width=`${gridCubeSize}px`;
        (square).style.height=`${gridCubeSize}px`;
        container.appendChild((square));
    }

    container.childNodes.forEach(function(childElement) {
    childElement.addEventListener("click", function() {
        // Call the penTool function to start sketching
        penTool();
        colorGrid.apply(this);
    });
});    
}

let isPenToolActive = false;

function penTool() {
    if (isPenToolActive) {
        // Stop the penTool function from being called on mouseover
        container.childNodes.forEach(function(childElement) {
            childElement.removeEventListener("mouseover", colorGrid);
        });

        // Set the flag variable to false to indicate that the penTool function is not active
        isPenToolActive = false;
    } else {

          // Set the flag variable to true to indicate that the penTool function is active
          isPenToolActive = true;
        // Start the penTool function on mouseover
        container.childNodes.forEach(function(childElement) {
            childElement.addEventListener("mouseover", colorGrid);
            
        });
    }
}

//function to remove the grid squares
function removeChildren(element) {
    //keep removing the child elements until zero childs are there in the container
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
    //change background-color of divs in the container to white rgb(238, 245, 245)
        
        container.childNodes.forEach(function(childElement) {
            childElement.style.backgroundColor = 'rgb(238, 245, 245)';
          });
    
   
}


function colorGrid() {
    // Generate a random color string in the format "rgb(x, y, z)"
    let randomColor = "rgb(" + Math.floor(Math.random() * 256) + ", " +
                               Math.floor(Math.random() * 256) + ", " +
                               Math.floor(Math.random() * 256) + ")";
  
    // Use the `this` keyword to refer to the DOM element that the event
    // was triggered on
    this.style.backgroundColor = randomColor;
  }