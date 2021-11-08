const gridContainer = document.querySelector('.gridContainer');

// create grid using 2 for loops
for (let i = 0; i < 16; i++) {
    let gridRowDiv = document.createElement('div');
    gridRowDiv.classList.add('gridRow');
    gridContainer.appendChild(gridRowDiv);
    for (let j = 0; j < 16; j++) {
        let gridSquareDiv = document.createElement('div');
        gridSquareDiv.classList.add('gridSquare');
        gridRowDiv.appendChild(gridSquareDiv);
    }
}

// change colour on hover event
const squares = document.querySelectorAll('.gridSquare');
squares.forEach(key => key.addEventListener('mouseover', addColour));
squares.forEach(key => key.addEventListener('mouseout', removeColour));

function addColour(e) {
    this.classList.add('grey');
}

function removeColour(e) {
    this.classList.remove('grey');
}