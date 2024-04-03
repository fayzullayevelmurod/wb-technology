var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // type: "fraction",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
// const sl = document.querySelectorAll(".swiper-pagination-bullet");
// const hoverBox = document.querySelector(".hover-box p");
// sl.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     hoverBox.classList.add("salom");
//   });
// });
// var paginationBullets = document.querySelectorAll(".swiper-pagination-bullet");

// paginationBullets.forEach(function (bullet, index) {
//   var textToShow = bullet.nextElementSibling.innerText;

//   bullet.addEventListener("mouseover", function () {
//     showText(textToShow);
//     moveTextDown();
//   });

//   bullet.addEventListener("mouseout", function () {
//     moveTextUp();
//   });
// });

// // Matn chiqarish funksiyasi
// function showText(text) {
//   var textElement = document.getElementById("pagination-text");
//   if (textElement) {
//     // Agar element mavjud bo'lsa
//     textElement.innerText = text;
//   }
// }

// // Matnni pastga surish funksiyasi
// function moveTextDown() {
//   var textElement = document.getElementById("pagination-text");
//   if (textElement) {
//     // Agar element mavjud bo'lsa
//     textElement.style.top = "44%";
//   }
// }

// // Matnni yuqoriga qaytarish funksiyasi
// function moveTextUp() {
//   var textElement = document.getElementById("pagination-text");
//   if (textElement) {
//     // Agar element mavjud bo'lsa
//     textElement.style.top = "40%";
//   }
// }

// menu
const closeBtn = document.querySelector(".close-btn");
const openMenuBtn = document.querySelector(".open-menu__btn");
const menu = document.querySelector(".menu");
closeBtn.addEventListener("click", () => {
  menu.classList.remove("scale-x-1");
  menu.classList.add("scale-x-0");
});
openMenuBtn.addEventListener("click", () => {
  menu.classList.add("scale-x-1");
  menu.classList.remove("scale-x-0");
});

// select language
const openSelect = document.querySelector(".open-select");
const selectBox = document.querySelector(".select-box");
const option = document.querySelectorAll(".option");
const selectedLanguage = document.querySelector(".selected-language");

openSelect.addEventListener("click", () => {
  selectBox.classList.toggle("scale-y-0");
  option.forEach((item) => {
    item.addEventListener("click", () => {
      selectedLanguage.textContent = item.textContent;
    });
  });
});
