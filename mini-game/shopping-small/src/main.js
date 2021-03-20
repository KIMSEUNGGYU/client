const itemsElement = document.querySelector(".items");
const filterList = document.querySelectorAll(".filter li");

const imgUrl = "./img/";
const dressType = {
  tshirt: "t",
  pants: "p",
  skirt: "s",
};
let data = {};

const psrseData = (items, filter) => {
  console.log(filter, items);
  const imgUrl = "./img/";
  const dressType = {
    tshirt: "t",
    pants: "p",
    skirt: "s",
  };

  if (
    filter &&
    (filter === "tshirt" || filter === "pants" || filter === "skirt")
  ) {
    return items
      .filter((item) => item.type === filter)
      .map((item) => {
        return {
          imgName: `${imgUrl}${item.color}_${dressType[item.type]}`,
          itemInfo: `${item.gender}, ${item.size} size`,
        };
      });
  }

  if (
    filter &&
    (filter === "blue" || filter === "yellow" || filter === "pink")
  ) {
    return items
      .filter((item) => item.color === filter)
      .map((item) => {
        return {
          imgName: `${imgUrl}${item.color}_${dressType[item.type]}`,
          itemInfo: `${item.gender}, ${item.size} size`,
        };
      });
  }

  // 모든 데이터 반환
  return items.map((item) => {
    return {
      imgName: `${imgUrl}${item.color}_${dressType[item.type]}`,
      itemInfo: `${item.gender}, ${item.size} size`,
    };
  });
};

const createItems = (items) => {
  html = ``;
  items.map((item) => {
    html += `
        <div class="item">
            <img src="${item.imgName}.png" alt="" />
            <span>${item.itemInfo}</span>
        </div>`;
  });

  itemsElement.innerHTML = html;
};

const start = async () => {
  const response = await fetch("data/data.json");
  data = await response.json();
  const items = data["items"];
  const psrseItems = psrseData(items);
  createItems(psrseItems);
};
start();

filterList.forEach((list) => {
  list.addEventListener("click", async () => {
    const response = await fetch("data/data.json");
    data = await response.json();
    const items = data["items"];
    // console.log(list.id, items);
    const psrseItems = await psrseData(items, list.id);
    // console.log("a", psrseItems);
    await createItems(psrseItems);
  });
});
