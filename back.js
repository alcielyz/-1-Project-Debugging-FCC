const images = [
  "Christmas lights image.jpg",
  "Halloween decoration image.jpg",
  "Santa image.jpg",
  // Add more image URLs here
];

const btn = document.getElementById("btn");
const image = document.querySelector(".image");

let currentIndex = 0;

btn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  const imageUrl = images[currentIndex];
  document.body.style.backgroundImage = `url(${imageUrl})`;
  image.src = imageUrl;
});
