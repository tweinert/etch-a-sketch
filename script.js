const gridContainer = document.querySelector('.gridContainer');

const maxGridPixels = 960;

let squaresPerSide = 16;


window.onload = function() {
    createGrid(squaresPerSide);
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
    squaresPerSide = 0;
    while(isNaN(squaresPerSide) || squaresPerSide > 100 || squaresPerSide < 2) {
        squaresPerSide = prompt("How many squares per side?");
    }
    createGrid(squaresPerSide);
}

// create grid with given number of squares per side
function createGrid(squaresPerSide) {
    // clear grid
    gridContainer.innerHTML = '';

    // calculate square size
    let squareSize = maxGridPixels / squaresPerSide;

    for (let i = 0; i < squaresPerSide; i++) {
        let gridRowDiv = document.createElement('div');
        gridRowDiv.classList.add('gridRow');
        gridRowDiv.style.height = squareSize + "px";
        gridContainer.appendChild(gridRowDiv);

        for (let j = 0; j < squaresPerSide; j++) {
            let gridSquareDiv = document.createElement('div');
            gridSquareDiv.classList.add('gridSquare');
            gridSquareDiv.style.height = squareSize + "px";
            gridSquareDiv.style.width = squareSize + "px";
            gridRowDiv.appendChild(gridSquareDiv);
            if (i === squaresPerSide - 1) {
                gridSquareDiv.style.borderBottom = "1px solid black";
            }
        }
    }

    // add mouseover event
    let squares = document.querySelectorAll('.gridSquare');
    squares.forEach(key => key.addEventListener('mouseover', addColour));
}

function getRandomColour() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomRGB = ("rgb(" + r + "," + g + "," + b + ")");
    return randomRGB;
}


/*
TODO
    use getRandomColour() to select colour on mouseover
*/