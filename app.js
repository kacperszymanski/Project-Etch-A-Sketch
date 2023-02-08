const container = document.getElementById("container");
const gridSizerange = document.getElementById("gridSizerange");
const eraserButton = document.getElementById("eraserButton");
const getColor = document.getElementById("getColor")
const cleanButton = document.getElementById("cleanButton")

const gridSizeRangeValue = document.getElementById("gridSizeRangeValue")

let defaultColor = "black"

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    row.className = "row";

    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.className = "cell"
      cell.addEventListener("mouseenter", function () {
        cell.style.backgroundColor = defaultColor;
      })
      row.appendChild(cell)
    }
    container.appendChild(row);
  };

}



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
  container.innerHTML = "";
  gridSizeRangeValue.textContent = `${gridSizerange.value} x ${gridSizerange.value}`
  createGrid(gridSizerange.value);

})


createGrid(16);