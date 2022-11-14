import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const article = document.querySelectorAll("article");
const contents = document.querySelector(".article__content--js");
const links = document.querySelectorAll(".article__link--js");


article.forEach((panel) => {
  panel.addEventListener("click", () => {
    const specialClass = panel.classList.toggle("article__special");
contents.forEach(content => {
    content.classList.toggle('.article__content-special');
})
  })});