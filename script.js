const GRID_CONTAINER = document.querySelector('.grid--container')
const RESET = document.querySelector('.reset--button')
const COLOR_ELEMENT = document.getElementById('color__selector')
let color = '#EB96EB'
const RANDOM_COLOR_ELEMENT = document.getElementById('random__color')
let isRandomColor = false

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
        e.target.style.backgroundColor = isRandomColor? generateRandomColor():color
    }
})

const selectColor = (e) => {
    color = e.target.value
    console.log(e.target.value)
}
COLOR_ELEMENT.addEventListener('change', selectColor)

const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    console.log(randomColor)
    return randomColor
    
}
RANDOM_COLOR_ELEMENT.addEventListener('change', function(e){
    isRandomColor = e.target.checked
})

