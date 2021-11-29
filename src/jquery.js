let modal = null;
const focusableSelector = "button , a,  input , textarea";
let focusables = [];

const openModal = function (e) {
  e.preventDefault();
  modal = document.querySelector(e.target.getAttribute("href"));
  focusables = Array.from(modal.querySelectorAll(focusableSelector));
  focusables[0].focus()
  modal.style.display = null;
  modal.removeAttribute("aria-hidden");
  modal.setAttribute("aria-modal", "true");
  // function pour fermer le modla
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

//
document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});

// fermer au click du button esc
const focusInModal = function (e) {
  e.preventDefault();

  let index = focusables.findIndex((f) => f === modal.querySelector(":focus"));
 if(e.shiptKey === true ){
     index--
 }else{
     index++
 }
 if(index >= focusables.length ){
     index = 0
 }
 if(index < 0 ){
     index = focusables.length - 1
 }
 focusable[index].focus

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
