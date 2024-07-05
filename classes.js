// let timeOut;
// const menu = document.querySelector("header .nav");
// const toggleBtn = document.querySelector("#bars");
// const allSpan = document.querySelectorAll(".activity .weekdays span");
// const collapse = document.querySelector(".activity .weekdays .all");
// const caret = document.querySelector(".activity .weekdays .fa");
// toggleBtn.onclick = () => {
//   if (menu.classList.contains("small-screen")) {
//     menu.classList.remove("small-screen");
//     toggleBtn.classList.remove("fa-times");
//     toggleBtn.classList.add("fa-bars");
//     return;
//   }
//   menu.classList.add("small-screen");
//   toggleBtn.classList.remove("fa-bars");
//   toggleBtn.classList.add("fa-times");
// };
// window.addEventListener("scroll", function () {
//   let nav = document.querySelector("header");
//   if (window.scrollY > nav.offsetHeight) {
//     nav.classList.add("scrolled");
//   } else {
//     nav.classList.remove("scrolled");
//   }
//   clearTimeout(timeOut);
//   timeOut = setTimeout(function () {
//     // This function is empty, you can add any code you want to run after the scroll stops.
//   }, 1000);
// });

// collapse.onclick = () => {
//   for (let i = 0; i < allSpan.length; i++) {
//     if (allSpan[i].style.display !== "flex") {
//       allSpan[i].style.display = "flex";
//       caret.classList.add("fa-caret-up");
//       caret.classList.remove("fa-caret-down");
//     } else {
//       allSpan[i].style.display = "none";
//       caret.classList.add("fa-caret-down");
//       caret.classList.remove("fa-caret-up");
//     }
//   }
// };

// caret.onclick = () => {
//   for (let i = 0; i < allSpan.length; i++) {
//     if (allSpan[i].style.display !== "flex") {
//       allSpan[i].style.display = "flex";
//       caret.classList.add("fa-caret-up");
//       caret.classList.remove("fa-caret-down");
//     } else {
//       allSpan[i].style.display = "none";
//       caret.classList.add("fa-caret-down");
//       caret.classList.remove("fa-caret-up");
//     }
//   }
// };





const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close-menu')
const nav2 = document.querySelector('.nav2')


hamburger.addEventListener('click', ()=> {
    hamburger.classList.add('hide');
    close.classList.remove('hide');
    nav2.classList.toggle('visible');
})

close.addEventListener('click', ()=> {
    hamburger.classList.remove('hide');
    close.classList.add('hide');
    nav2.classList.toggle('visible');
})
