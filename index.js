const background1 = document.querySelector(".changeBg1");
const background2 = document.querySelector(".changeBg2");
const button = document.querySelectorAll(".changeBtn");

// color
const color1 = ["white"];
const color2 = [
  "#4c5f7a",
  "#393e6f",
  "#3d2e4f",
  "#321d2f",
  "#1b1f3a",
  "#53354a",
  "#a64942",
  "#020e35",
];
let i = 0;
let j = 0;

function getColor2() {
  if (i == color2.length) {
    i = 0;
  }
  const Clr2 = color2[i++];
  return Clr2;
}

function getColor3() {
  if (j == color2.length) {
    j = 0;
  }
  const Clr3 = color2[j++];
  return Clr3;
}

function changeBackground() {
  const Clr1 = color1[0];

  background1.style.backgroundImage = `linear-gradient(${Clr1} 50%, ${getColor2()} 50%)`;
  background2.style.backgroundColor = getColor3();
}

// button
button[0].addEventListener("click", changeBackground);
button[1].addEventListener("click", changeBackground);
button[2].addEventListener("click", changeBackground);
button[3].addEventListener("click", changeBackground);
button[4].addEventListener("click", changeBackground);
button[5].addEventListener("click", changeBackground);
button[6].addEventListener("click", changeBackground);
