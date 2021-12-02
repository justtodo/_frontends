// jquerie make a burger
// open modal
$("#js-burger").click(function () {
  $(".modal-header").toggle();
  $(".modal-header").fadeIn(2000);;
});

// open search popup modal 
$("#js-modal-search").click(function () {
  $("*").show("search-popup").toggleClass(".modal-header").css("transition","2s");
});

// close modal
$(".js-close,.js-modal-stop").click(function () {
  $(".modal-header,.search-popup").css("display", "none");
});

// active light theme and dark-theme
$(".switch").click(function () {
  $("*").toggleClass("theme-light");
});


// PROMOTION HEADER
// END PROMOTION
