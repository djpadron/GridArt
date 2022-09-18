const grid_container = document.querySelector(".grid-container");
const total_grid_items = 64;

for (let index = 0; index < total_grid_items; index++) {
  let grid_item_div = document.createElement("div");
  grid_item_div.classList.add("grid-item", `grid-item-${index}`);

  grid_item_div.addEventListener("mouseenter", (event) => {
    event.target.classList.add("mouseenter");
  });

  grid_container.appendChild(grid_item_div);
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", (event) => {
  const grid_items = grid_container.childNodes;
  grid_items.forEach((grid_item) => {
    grid_item.classList.remove("mouseenter");
  });
});
