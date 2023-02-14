const grid = document.getElementById("grid");
const cell = document.getElementById("cell");
const gridSizerange = document.getElementById("gridSizerange");
const eraserButton = document.getElementById("eraserButton");
const getColor = document.getElementById("getColor")
const cleanButton = document.getElementById("cleanButton")
const gridSizeRangeValue = document.getElementById("gridSizeRangeValue")

let defaultColor = "black"


function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell"
    cell.addEventListener("mousemove", function () {
      cell.style.backgroundColor = defaultColor;
    })

    grid.appendChild(cell)
  }

};


eraserButton.addEventListener("click", function () {
  defaultColor = "white";
})

getColor.addEventListener("input", function () {
  defaultColor = getColor.value
})

cleanButton.addEventListener("click", function () {
  const cleanCell = document.getElementsByClassName("cell");
  for (i = 0; i < cleanCell.length; i++)
    cleanCell[i].style.backgroundColor = "white"
})

gridSizerange.addEventListener("input", function () {
  grid.innerHTML = "";
  gridSizeRangeValue.textContent = `${gridSizerange.value} x ${gridSizerange.value}`
  createGrid(gridSizerange.value);


})


window.onload = () => {
  createGrid(16)

}