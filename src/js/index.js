import "../scss/main.scss";

console.log("HELLO. My name is Joanna. Nice to meet you on my website. Enjoy!");

const articles = document.querySelectorAll(".article");



function openSize(){
this.classList.toggle('open');
};

function additionalElement(e){
    console.log(e);
    if(!e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
}


articles.forEach(article=>{article.addEventListener('click', openSize)});
articles.forEach(article=>{article.addEventListener('transitionend', additionalElement)});
