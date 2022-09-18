const grid_container = document.querySelector(".grid-container");
const MAX_GRID_ITEMS = 100;
var total_grid_items = 100;

const numberInput = document.querySelector("#inputTextField");
numberInput.addEventListener("input", (event) => {
  const numberInputValue = Number(event.target.value);
  if (numberInputValue > MAX_GRID_ITEMS) {
    numberInputValue = MAX_GRID_ITEMS;
  }
  total_grid_items = Number(event.target.value);
  drawGrid(total_grid_items);
});

drawGrid(total_grid_items);

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", (event) => {
  removeAllChildNodes(grid_container);
  numberInput.value = "";
  const grid_items = grid_container.childNodes;
  grid_items.forEach((grid_item) => {
    grid_item.classList.remove("mouseenter");
  });
});

function drawGrid(total_grid_items) {
  removeAllChildNodes(grid_container);

  for (let index = 0; index < total_grid_items; index++) {
    let grid_item_div = document.createElement("div");
    grid_item_div.classList.add("grid-item", `grid-item-${index}`);

    grid_item_div.addEventListener("mouseenter", (event) => {
      event.target.classList.add("mouseenter");
    });

    grid_container.appendChild(grid_item_div);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
