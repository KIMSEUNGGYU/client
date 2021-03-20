// Fetch the items from the JSON file
function loadItmes() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  const html = items.map((item) => createHTMLString(item)).join("");
  container.innerHTML = html;
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item" data-type=${item.type} data-color=${item.color}>
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// button Click 이벤트시, 해당 하는 item들을 보여줌
function onButtonClick(event) {
  const { key, value } = event.target.dataset;
  if (key == null || value == null) return;

  items = document.querySelectorAll(".items .item");
  updateItems(items, value);
}

function updateItems(items, value) {
  items.forEach((item) => {
    const { type, color } = item.dataset;

    if (value === type || value === color) {
      item.classList.remove("invisible");
    } else {
      item.classList.add("invisible");
    }
  });
}

// 이벤트를 처리하는 함수는 on 으로 시작하는게 좋음!!
// element를 새로 만들어서 그렇게 좋지는 않음.
// function onButtonClick(event, items) {
//   const dataset = event.target.dataset;
//   const key = dataset.key;
//   const value = dataset.value;

//   if (key == null || value == null) return;

//   displayItems(items.filter((item) => item[key] === value));
// }

//
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");

  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main;
loadItmes()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
