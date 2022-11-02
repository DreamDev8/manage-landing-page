const toggleBtn = document.querySelector(".nav-toggle");
const img = document.querySelector(".nav-toggle img");
const menuToggle = document.querySelector(".menu-toggle");
const logo = document.querySelector(".logo");

//toggle mobile nav button and drop down mobile menu

toggleBtn.addEventListener("click", function () {
  if (img.getAttribute("src") === "./images/icon-hamburger.svg") {
    img.setAttribute("src", "./images/icon-close.svg");
    toggleBtn.style.zIndex = "100";
    toggleBtn.style.backgroundColor = "hsl(13, 100%, 96%)";
  } else {
    img.setAttribute("src", "./images/icon-hamburger.svg");
  }
  menuToggle.classList.toggle("drop-down-menu");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    menuToggle.classList.remove("drop-down-menu");
    img.setAttribute("src", "./images/icon-hamburger.svg");
  }
});

//carousel

const carousel = document.querySelector(".carousel");
const btns = document.querySelectorAll(".btn-carousel");
const content = document.querySelectorAll(".content");

const sliderContainer = document.querySelector(".carousel-content");
let currentSliderCounter = 1;
let currentBtnCounter = 1;
let sliderSize = content[0].clientWidth;

sliderContainer.style.transform =
  "translateX(" + -sliderSize * currentSliderCounter + "px)";

function nextSlide() {
  btns[currentBtnCounter].classList.remove("active");

  if (
    currentSliderCounter < content.length - 1 &&
    currentBtnCounter < btns.length - 1
  ) {
    currentBtnCounter++;
    btns[currentBtnCounter].classList.add("active");

    currentSliderCounter++;

    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    sliderContainer.style.transform =
      "translateX(" + -sliderSize * currentSliderCounter + "px)";
  } else {
    currentSliderCounter = 0;
    currentBtnCounter = 0;

    btns[currentBtnCounter].classList.add("active");

    sliderContainer.style.transition = "transform 0.4s ease-in-out";
    sliderContainer.style.transform =
      "translateX(" + -sliderSize * currentSliderCounter + "px)";
  }
  window.addEventListener("resize", function () {
    sliderContainer.style.transition = "none";
    sliderSize = content[0].clientWidth;
    sliderContainer.style.transform =
      "translateX(" + -sliderSize * currentSliderCounter + "px)";
  });

  carousel.addEventListener("click", function (e) {
    const btnId = e.target.dataset.id;

    if (btnId) {
      btns.forEach(function (btn) {
        btn.classList.remove("active");
        e.target.classList.add("active");
      });

      content.forEach(function (singleContent) {
        singleContent.classList.remove("active");
      });

      const contentId = document.getElementById(btnId);
      contentId.classList.add("active");
      sliderSize = contentId.clientWidth;

      if (contentId === content[0]) {
        currentSliderCounter = 0;
        sliderContainer.style.transform =
          "translateX(" + sliderSize * currentSliderCounter + "px)";
        sliderContainer.style.transition = "transform 0.4s ease-in-out";
      } else if (contentId === content[1]) {
        currentSliderCounter = 1;
        sliderContainer.style.transform =
          "translateX(" + -sliderSize * currentSliderCounter + "px)";
        sliderContainer.style.transition = "transform 0.4s ease-in-out";
      } else if (contentId === content[2]) {
        currentSliderCounter = 2;
        sliderContainer.style.transform =
          "translateX(" + -sliderSize * currentSliderCounter + "px)";
        sliderContainer.style.transition = "transform 0.4s ease-in-out";
      } else if (contentId === content[3]) {
        currentSliderCounter = 3;
        sliderContainer.style.transform =
          "translateX(" + -sliderSize * currentSliderCounter + "px)";
        sliderContainer.style.transition = "transform 0.4s ease-in-out";
      }
    }
  });
}

setInterval(nextSlide, 4000);

//footer

const socials = document.querySelectorAll(".social a");
const socialImgs = document.querySelectorAll(".social img");

socials.forEach(function (social) {
  social.addEventListener("mouseover", function (e) {
    const imgId = e.target.dataset.id;
    if (imgId === "facebook") {
      e.target.setAttribute("src", "./images/icon-facebook-hover.svg");
    } else if (imgId === "youtube") {
      e.target.setAttribute("src", "./images/icon-youtube-hover.svg");
    } else if (imgId === "twitter") {
      e.target.setAttribute("src", "./images/icon-twitter-hover.svg");
    } else if (imgId === "pinterest") {
      e.target.setAttribute("src", "./images/icon-pinterest-hover.svg");
    } else {
      e.target.setAttribute("src", "./images/icon-instagram-hover.svg");
    }
  });
  social.addEventListener("mouseout", function (e) {
    const imgId = e.target.dataset.id;
    if (imgId === "facebook") {
      e.target.setAttribute("src", "./images/icon-facebook.svg");
    } else if (imgId === "youtube") {
      e.target.setAttribute("src", "./images/icon-youtube.svg");
    } else if (imgId === "twitter") {
      e.target.setAttribute("src", "./images/icon-twitter.svg");
    } else if (imgId === "pinterest") {
      e.target.setAttribute("src", "./images/icon-pinterest.svg");
    } else {
      e.target.setAttribute("src", "./images/icon-instagram.svg");
    }
  });
});
