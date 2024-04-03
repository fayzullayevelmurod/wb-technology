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
