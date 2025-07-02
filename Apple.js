var swiper = new Swiper(".mySwiper", {
  slidesPerView: "1.5",
  centeredSlides: true,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
    disableOnlnteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var menu = document.querySelector(".ri-menu-line")
var clo = document.querySelector(".ri-close-fill")
var nav = document.querySelector(".respo-nav")

menu.addEventListener("click",function(){
  nav.style.top = "0%";
})

clo.addEventListener("click",function(){
nav.style.top = "-120%";
})
var store = document.querySelector("#store");
var subMenu = document.querySelector(".submenu");

store.addEventListener("mousemove", function(){
  subMenu.style.top = "5%"
})

store.addEventListener("mouseleave", function(){
  subMenu.style.top = "-100%"
})
