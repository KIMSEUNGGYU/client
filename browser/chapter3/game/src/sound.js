"use strict";

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const alertSound = new Audio("./sound/alert.wav");
const winSound = new Audio("./sound/game_win.mp3");
const bgSound = new Audio("./sound/bg.mp3");

export function playCarrot() {
  playSound(carrotSound);
}

export function playBug() {
  playSound(bugSound);
}

export function playAlert() {
  playSound(alertSound);
}

export function playWin() {
  playSound(winSound);
}

export function playBackground() {
  playSound(bgSound);
}

export function stopCarrot() {
  stopSound(carrotSound);
}

export function stopBug() {
  stopSound(bugSound);
}

export function stopAlert() {
  stopSound(alertSound);
}

export function stopWin() {
  stopSound(winSound);
}

export function stopBackground() {
  stopSound(bgSound);
}

// 공통적으로 사용할 수 있기 때문에
// 굳이 클래스로 만들지 않고 빼냄.
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
