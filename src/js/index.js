import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const articles = document.querySelectorAll(".article");

function openSize() {
  this.classList.toggle("open");
  this.classList.toggle("open-active");
}

articles.forEach((article) => {
  article.addEventListener("click", openSize);
});
