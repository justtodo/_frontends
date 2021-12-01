// jquerie make a burger
// open modal
$("#js-burger").click(function () {
  $(".modal-header").show();
});
// open js-modal-search
$("#js-modal-search").click(function (){
  $("*").toggleClass("js-modal-search");
});
// close modal
$(".js-close,.js-modal-stop").click(function () {
  $(".modal-header").css("display", "none");
});
// active light theme and dark-theme
$(".switch").click(function () {
  $("*").toggleClass("theme-light");
});


// PROMOTION HEADER
// END PROMOTION
