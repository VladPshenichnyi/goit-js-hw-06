function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeButton = document.querySelector(".change-color");

changeButton.addEventListener("click", obButtonClick);

function obButtonClick(event) {
  const text = event.target.parentElement.querySelector(".color");
  const colorValue = getRandomHexColor();
  text.innerHTML = colorValue;
  document.body.style.backgroundColor = colorValue;
}