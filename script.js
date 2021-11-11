const gridContainer = document.querySelector('.gridContainer');

const maxGridPixels = 960;

let squaresPerSide = 16;


window.onload = function() {
    createGrid(squaresPerSide);
};

// create grid with given number of squares per side
function createGrid(squaresPerSide) {
    // clear grid
    gridContainer.innerHTML = '';

    // calculate square size
    let squareSize = maxGridPixels / squaresPerSide;

    for (let i = 0; i < squaresPerSide; i++) {
        // row container div
        let gridRowDiv = document.createElement('div');
        gridRowDiv.classList.add('gridRow');
        gridRowDiv.style.height = squareSize + "px";
        gridContainer.appendChild(gridRowDiv);

        for (let j = 0; j < squaresPerSide; j++) {
            // individual square div
            let gridSquareDiv = document.createElement('div');
            gridSquareDiv.classList.add('gridSquare');

            // set styling
            gridSquareDiv.style.height = squareSize + "px";
            gridSquareDiv.style.width = squareSize + "px";
            if (i === squaresPerSide - 1) {
                gridSquareDiv.style.borderBottom = "1px solid black";
            }

            gridRowDiv.appendChild(gridSquareDiv);
            
        }
    }

    // add mouseover event
    let squares = document.querySelectorAll('.gridSquare');
    squares.forEach(key => key.addEventListener('mouseover', addRandomColour));
}

// sets background to random colour using getRandomRGB function
function addRandomColour(e) {
    // only do this on first mouseover
    if (this.classList.contains('randomRGB')) {
        return;
    }

    this.classList.add('randomRGB');
    this.style.backgroundColor = getRandomColour();
}

function getRandomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomRGB = ("rgb(" + r + "," + g + "," + b + ")");
    return randomRGB;
}

// ask user for grid size
function promptSize() {
    squaresPerSide = 0;
    while(isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide < 2) {
        squaresPerSide = prompt("How many squares per side?");
    }
    createGrid(squaresPerSide);
}