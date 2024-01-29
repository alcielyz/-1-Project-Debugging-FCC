const colors = ["green", "red", "blue", "white", "gold", "rgba(240, 52, 52)", "rgba(224, 130, 131)", "rgba(38, 194, 129)", "rgba(228, 241, 254)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
