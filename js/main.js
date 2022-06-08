window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;

  if (scroll > 100) {
    let nav = document.querySelector(".header__bottom");
    nav.classList.add("fixed");
  } else {
    let nav = document.querySelector(".header__bottom");
    nav.classList.remove("fixed");
  }
});


$(".header_nav li").has("ul").addClass("header_bottom_icon");


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    effect: "fade",
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





  var acc = document.getElementsByClassName("accordian_heading");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  $(".gototop").on("click", function () {
    scroll({
      top: 0,
    });
  });
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll >= 1000) {
      $(".gototop").addClass("back_to_top");
    } else {
      $(".gototop").removeClass("back_to_top");
    }
  });
let footer = document.getElementById("footer");
let main = document.getElementById("main");

const footerHeight = footer.offsetHeight;
console.log(footer,main,footerHeight)

main.style.marginBottom = footerHeight - 20  + "px";
console.log(footer,main,footerHeight)