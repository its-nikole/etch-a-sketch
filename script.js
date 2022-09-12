const GRID_CONTAINER = document.querySelector('.grid--container')

// Creating Square Divs
const divSquare = (size) => {
    const DIV = document.createElement('div')
    DIV.classList.add('square')
    DIV.style.width = `${size}px`
    DIV.style.height = `${size}px`

    return DIV
}

// Creating Grid and Adding Squares
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            GRID_CONTAINER.appendChild(divSquare(GRID_CONTAINER.clientWidth / gridSize))
        }
    }
}
createGrid(8)
