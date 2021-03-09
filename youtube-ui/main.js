const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  console.log("click");
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
