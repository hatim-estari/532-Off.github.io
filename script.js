let isBarHidden = false;
window.addEventListener('scroll', () => {
    if (window.scrollY > 20 && !isBarHidden) {
        const bar = document.querySelector(".B");
        const bot= document.querySelector(".boton-C");
        isBarHidden = true;
        bar.classList.remove("--hidden");
        bot.classList.remove("--hidden");
    } else if (window.scrollY <= 20 && isBarHidden) {
        const bar = document.querySelector(".B");
        const bot= document.querySelector(".boton-C");
        isBarHidden = false;
        bar.classList.add("--hidden");
        bot.classList.add("--hidden");
};})
document.addEventListener("DOMContentLoaded", function() {
    const insta = document.querySelector(".fa-instagram");
    insta.addEventListener("mouseover",function() {insta.classList.add("fa-bounce");});
    insta.addEventListener("mouseout", function() {insta.classList.remove("fa-bounce");});
    const linkedin = document.querySelector(".fa-linkedin");
    linkedin.addEventListener("mouseover",function() {linkedin.classList.add("fa-bounce");});
    linkedin.addEventListener("mouseout", function() {linkedin.classList.remove("fa-bounce");});
    const facebook = document.querySelector(".fa-facebook-f");
    facebook.addEventListener("mouseover",function() {facebook.classList.add("fa-bounce");});
    facebook.addEventListener("mouseout", function() {facebook.classList.remove("fa-bounce");});
    const youtube = document.querySelector(".fa-youtube");
    youtube.addEventListener("mouseover",function() {youtube.classList.add("fa-bounce");});
    youtube.addEventListener("mouseout", function() {youtube.classList.remove("fa-bounce");});
  });

