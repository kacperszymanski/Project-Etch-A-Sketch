const DEFAULT_COLOR = 'black'
const DEFAULT_SIZE = 16
const DEFAULT_MODE = 'color'

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE

function setCurrentMode(newMode){
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentColor(newColor){
  currentColor = newColor
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
colorButton.onclick = () => setCurrentMode('color')
eraserButton.onclick = () => setCurrentMode('eraser')
cleanButton.onclick = () => cleanGrid()

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(size) {
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

function changeColor(e){
  if (e.type === 'mouseover' && !mouseDown) return
  if (currentMode === 'color') {
    e.target.style.backgroundColor = currentColor
  } else if (currentMode === 'eraser'){
    e.target.style.backgroundColor = 'white'
  }
}

function activateButton(e){
  if (currentMode === 'color'){
    getColor.classList.remove('activate')
  } else if (currentMode === 'eraser'){
    eraserButton.classList.remove('activate')
  }
if (currentMode === 'color'){
  getColor.classList.add('activate')
}else if(currentMode === 'eraser') {
  eraserButton.classList.add('activate')
}
}

function cleanGrid(){
  const cleanCell = document.getElementsByClassName("cell")
  for (i = 0; i < cleanCell.length; i++)
    cleanCell[i].style.backgroundColor = "white"
}

function setGridSize(){}

gridSizeRange.addEventListener("input", function () {
  grid.innerHTML = "";
  gridSizeRangeValue.textContent = `${gridSizeRange.value} x ${gridSizeRange.value}`
  createGrid(gridSizeRange.value);
})


window.onload = () => {
  createGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}