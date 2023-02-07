const container = document.getElementById("container");
const gridButton = document.getElementById("gridButton");

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < size; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell")
        grid.addEventListener("mouseenter", function() {
          grid.style.backgroundColor = "black";
        row.appendChild(cell)
        })
      }
      };
      container.appendChild(row);
    }


createGrid(16);

gridButton.addEventListener("click", function() {
  container.innerHTML = "";
  const size = prompt("Enter number of squares per side (max 100)");
  if (size > 100) {
    alert("Size cannot be greater than 100");
    return;
  }
  createGrid(size);
});


