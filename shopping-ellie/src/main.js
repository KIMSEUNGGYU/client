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
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// 이벤트를 처리하는 함수는 on 으로 시작하는게 좋음!!
function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) return;

  displayItems(items.filter((item) => item[key] === value));
}

//
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");

  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItmes()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
