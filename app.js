const DEFAULT_COLOR = 'black'
const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentColor(newColor) {
  setCurrentMode('color')
  currentColor = newColor
}

function setCurrentSize(newGridSize) {
  currentSize = newGridSize
}

const grid = document.getElementById("grid");
const cell = document.getElementById("cell");
const gridSizeRange = document.getElementById("gridSizeRange");
const eraserButton = document.getElementById("eraserButton");
const getColor = document.getElementById("getColor")
const colorButton = document.getElementById("colorButton")
const cleanButton = document.getElementById("cleanButton")
const gridSizeRangeValue = document.getElementById("gridSizeRangeValue")


getColor.oninput = (e) => setCurrentColor(e.target.value)

eraserButton.onclick = () => setCurrentMode('eraser')
cleanButton.onclick = () => cleanGrid()
colorButton.onclick = () => setCurrentMode('color')
gridSizeRangeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
gridSizeRangeSlider.onchange = (e) => changeSize(e.target.value)


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(size) {
  grid.innerHTML = ''
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell"
    cell.addEventListener('mouseover', changeColor)
    cell.addEventListener('mousedown', changeColor)
    grid.appendChild(cell)
  }
}

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  createGrid(value)

}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser') {
    e.target.style.backgroundColor = 'white'
  }
}

function activateButton(newMode) {
  if (currentMode === 'color') {
    getColor.classList.remove('activate')
  } else if (currentMode === 'eraser') {
    eraserButton.classList.remove('activate')
  }
  if (newMode === 'color') {
    getColor.classList.add('activate')
  } else if (newMode === 'eraser') {
    eraserButton.classList.add('activate')
  }
}

function cleanGrid() {
  const cleanCell = document.getElementsByClassName("cell")
  for (i = 0; i < cleanCell.length; i++)
    cleanCell[i].style.backgroundColor = "white"
}

function updateSizeValue(value) {
  gridSizeRangeValue.textContent = `${value} x ${value}`
}



window.onload = () => {
  activateButton(currentMode)
  changeSize(currentSize)
}