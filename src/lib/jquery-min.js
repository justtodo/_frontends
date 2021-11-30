// jquerie make a burger

$("#js-burger").click(function () {
  $(".modal-header").show();
});

$(".switch").click(function () {
  $("*").toggleClass(".theme-switcher");
});

$(".js-close").click(function () {
  $(".modal-header").css("display", "none");
});

// PROMOTION HEADER
// END PROMOTION
