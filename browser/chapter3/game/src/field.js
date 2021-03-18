"use strict";
import * as sound from "./sound.js";

const CARROT_SIZE = 80;

export const itemType = Object.freeze({
  carrot: "carrot",
  bug: "bug",
});

export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.field = document.querySelector(".game__field");
    this.fieldRect = this.field.getBoundingClientRect();
    // this binding 방법 1
    // this.onClick = this.onClick.bind(this);
    // this.field.addEventListener("click", this.onClick);

    // this binding 방법 2
    // this.field.addEventListener("click", (event) => this.onClick(event));

    // this binding 방법 3
    this.field.addEventListener("click", this.onClick);
  }

  init() {
    this.field.innerHTML = "";
    this._addItem("carrot", this.carrotCount, "img/carrot.png");
    this._addItem("bug", this.bugCount, "img/bug.png");
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i = 0; i < count; i++) {
      const item = document.createElement("img");
      item.setAttribute("class", className);
      item.setAttribute("src", imgPath);
      item.style.position = "absolute";
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }

  // 방법 1
  // onClick(event) {
  //   const target = event.target;
  //   if (target.matches(".carrot")) {
  //     target.remove();
  //     sound.playCarrot();
  //     this.onItemClick && this.onItemClick("carrot");
  //   } else if (target.matches(".bug")) {
  //     this.onItemClick && this.onItemClick("bug");
  //   }
  // }

  // 방법 3
  onClick = (event) => {
    const target = event.target;
    if (target.matches(".carrot")) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(itemType.carrot);
    } else if (target.matches(".bug")) {
      this.onItemClick && this.onItemClick(itemType.bug);
    }
  };
}

// field 클래스와 관계없는 함수.
// field 기능에서 사용하지만, 직접적인 연관없음.
// 이렇게 클래스안에 선언하지 않으면 객체가 할당 될 때 메모리에 올라가지 않아, 따로 빼는게 더 좋음.
// static 함수?
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
