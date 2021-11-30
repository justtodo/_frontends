// jquerie make a burger

$("#js-burger").click(function () {
  $(".modal-header").show();
});

$(".js-close").click(function () {
  $(".modal-header").css("display", "none");
});

$(".switch").click(function () {
  $("*").toggleClass("theme-light");
});

// PROMOTION HEADER
// END PROMOTION
