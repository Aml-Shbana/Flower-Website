var banner1 = document.querySelector(".banner1");
var banner2 = document.querySelector(".banner2");
var banner3 = document.querySelector(".banner3");

window.onscroll = function () {
  if (window.scrollY > 200) {
    banner1.style.animation = "slidebaner 1.5s forwards";
    banner2.style.animation = "slidebaner 1.5s 0.4s forwards";
    banner3.style.animation = "slidebaner 1.5s 0.7s forwards";
  }
};
