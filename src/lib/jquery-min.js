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

// jquerie make a burger

$("#js-burger").click(function () {
  $("#header").slideToggle(); //fait disparaître le contenu en params
});

$("#moon").click(function () {
  $("*").css("color", "#ccc").css("background", "#121c4299").fadeIn(200);
});
// $("#sun").click(function () {
//   $("*").css("color", "#000").css("background", "#f3f9fb").fadeOut(200);
// });

// jquerie  DARK MOD AND LIGHT MODE

// $(".icon-sun").click(function () {
//   $(this).toggleClass("*").css("background", "#121c42");
// });
