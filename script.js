const gridContainer = document.querySelector('.gridContainer');

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridSquare");
    gridContainer.appendChild(newDiv);
}