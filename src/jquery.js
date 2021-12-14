let modal = null;
const focusableSelector = "button , a,  input , textarea";
let focusables = [];

const openModal = function (e) {
  e.preventDefault();
  modal = document.querySelector(e.target.getAttribute("href"));
  focusables = Array.from(modal.querySelectorAll(focusableSelector));
  focusables[0].focus();
  modal.style.display = null;
  modal.removeAttribute("aria-hidden");
  modal.setAttribute("aria-modal", "true");
  // function pour fermer le modal
  //   modal = target;
  modal.addEventListener("click", closeModal);
  modal.querySelector("js-modal-close").addEventListener("click", closeModal);
  modal
    .querySelector("js-modal-stops")
    .addEventListener("click", stopPropagation);
};

const closeModal = function (e) {
  if (modal === null) return;
  e.preventDefault();
  //   const modal = document.querySelector(e.target.getAttribute("href"));
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.removeAttribute("aria-modal");
  modal.removeEventListener("click", closeModal);
  modal
    .querySelector("js-modal-close")
    .removeEventLilstener("click", closeModal);
  modal
    .querySelector("js-modal-stop")
    .removeEventLilstener("click", stopPropagation);
  modal = null;
};

/// empêcher la progation u close
const stopPropagation = function (e) {
  e.stopPropagation();
};

// burgur modal
document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

// search popup modal
document.querySelectorAll(".search-popup").forEach((e) => {
  e.addEventListener("click", openModal);
});

// fermer au click du button esc
const focusInModal = function (e) {
  e.preventDefault();

  let index = focusables.findIndex((f) => f === modal.querySelector(":focus"));
  if (e.shiptKey === true) {
    index--;
  } else {
    index++;
  }
  if (index >= focusables.length) {
    index = 0;
  }
  if (index < 0) {
    index = focusables.length - 1;
  }
  focusables[index].focus();
};

window.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  if (e.key === "Escape" || e.key === "Esc") {
    closeModal(e);
  }
  if (e.key === "Tab" && modal != null) {
    focuslInModal(e);
  }
});

// enfermer le focus pionter tous les element focussable
const close = function (e) {
  close.querySelector(".js-close");
  close.addEventListener("click", closeModal);
};

// PROMOTION HEADER
const target = document.getElementById("target");
let array = [
  "Services Informatiques",
  "Web Dev",
  "Freelances",
  "Stores",
  "Web helps",
  "Challenges",
  "Hébergement",
  "Forums",
  "CodesBlogs",
  "Assistance",
  "Accompagnement",
  "Consultation UX / UI",
  "Installations",
  "Accessoires Informatiques",
];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.classList.add("letter");
  letter.style.opacity = "0";
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 80);
};
loop();
// END PROMOTION


// GALLERY

$(function(){
  
  var swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    slidesPerView: 5,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: '.carousel-gallery .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is <= 480px
      425: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  }); /*http://idangero.us/swiper/api/*/

  

});