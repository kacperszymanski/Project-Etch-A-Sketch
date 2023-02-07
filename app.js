const container = document.getElementById("container");
const gridSizeButton = document.getElementById("gridSizeButton");
const eraserButton = document.getElementById("eraserButton");

let pickedColor = "black"

function createGrid(size) {
  for (let i = 0; i < size; i++) {
      const row = document.createElement("div");

      row.className = "row";
      
      for (let j = 0; j < size; j++) {
        const cell = document.createElement("div");
        cell.className = "cell"
        cell.addEventListener("mouseenter", function() {
          cell.style.backgroundColor = pickedColor;
        
        })
        row.appendChild(cell)
      }
      container.appendChild(row);  
    };
      
    }


createGrid(16);

eraser.addEventListener("click", function(){
  pickedColor = "white";
})


eraser.addEventListener("click", function(){
  pickedColor = "white";
})


gridSizeButton.addEventListener("click", function() {
  container.innerHTML = "";
  const size = prompt("Enter number of squares per side (max 100)");
  if (size > 100) {
    alert("Size cannot be greater than 100");
    return;
  }
  createGrid(size);
});


function createColorPalette(value) {
  var v = 255/value;
  for( var rStep = 0, r = 0; rStep < v; rStep++) {    
      for( var gStep = 0, g = 0; gStep < v; gStep++ ) {       
          for( var bStep = 0, b = 0; bStep < v; bStep++ ) {                                                  
              createDiv(r,g,b);
              b += value;
          }
          g += value;
      }
      r += value;
  }
  createBr();
}
createColorPalette()