const gridContainer = document.querySelector('.gridContainer');

const maxGridPixels = 960;

// change colour on hover event
const squares = document.querySelectorAll('.gridSquare');
squares.forEach(key => key.addEventListener('mouseover', addColour));
//squares.forEach(key => key.addEventListener('mouseout', removeColour));

window.onload = function() {
    createGrid(16);
};

// adds colour to square, used when hover
function addColour(e) {
    this.classList.add('grey');
}

function removeColour(e) {
    this.classList.remove('grey');
}

// ask user for grid size
function promptSize() {
    let squaresPerSide = prompt("How many squares per side?");
    createGrid(squaresPerSide);
}

// create grid with given number of squares per side
function createGrid(squaresPerSide) {
    // clear grid
    gridContainer.innerHTML = '';

    // square size string
    

    for (let i = 0; i < squaresPerSide; i++) {
        let gridRowDiv = document.createElement('div');
        gridRowDiv.classList.add('gridRow');
        gridContainer.appendChild(gridRowDiv);
        for (let j = 0; j < squaresPerSide; j++) {
            let gridSquareDiv = document.createElement('div');
            gridSquareDiv.classList.add('gridSquare');
            gridSquareDiv.style.height = "48px";
            gridSquareDiv.style.width = "48px";
            gridRowDiv.appendChild(gridSquareDiv);
        }
    }
}