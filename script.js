const gridContainer = document.querySelector('.gridContainer');

for (let i = 0; i < 16; i++) {
    let gridRowDiv = document.createElement('div');
    gridRowDiv.classList.add('gridRowDiv');
    gridContainer.appendChild(gridRowDiv);
    for (let j = 0; j < 16; j++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('gridSquare');
        gridRowDiv.appendChild(newDiv);
    }
}