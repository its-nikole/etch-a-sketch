const GRID_CONTAINER = document.querySelector('.grid--container')
const RESET = document.querySelector('.reset--button')

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
            console.log(GRID_CONTAINER.clientWidth)
        }
    }
}
createGrid(8)

// Reset
const resetAndLoad = () => {
    while (GRID_CONTAINER.firstChild) {
        GRID_CONTAINER.removeChild(GRID_CONTAINER.firstChild);
    }
    createGrid(8)
}

RESET.addEventListener('click', resetAndLoad)

// 
GRID_CONTAINER.addEventListener('mouseover', function(e){
    if (e.target.matches('.square')) {
        console.log(e.target.matches('.square'))
        e.target.style.backgroundColor = 
    }
})

let selectColor = () => {

}