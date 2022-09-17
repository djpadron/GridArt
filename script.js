const grid_container = document.querySelector(".grid-container");
const total_grid_items = 1000;

for (let index = 0; index < total_grid_items; index++) {
  let grid_item_div = document.createElement("div");
  grid_item_div.classList.add("grid-item", `grid-item-${index}`);
  grid_container.appendChild(grid_item_div);
}
