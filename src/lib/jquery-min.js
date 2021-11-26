// // When user clicks anywhere outside of the Modal, close Modal
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// modal.addEventListener("click", () => {
//   modal.classList.toggle("active");
// });

// const toggleButton = document.getElementById("js-burger");
// const sideBar = document.getElementById("side-bar");

// toggleButton.addEventListener("click", show);

// function show() {
//   sideBar.classList.toggle("active");
// }

// // REMOVE SIDEBAR IF CLICK ON THE MAIN CONTENT
// const content = document.querySelector(".content");

// content.addEventListener("click", () => {
//   sideBar.classList.remove("active");
// });

// jquerie
$("#js-burger").click(function () {
  $(this).toggleClass("header");
});
