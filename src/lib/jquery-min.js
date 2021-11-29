// jquerie make a burger

$("#js-burger").click(function () {
  $(".modal-header").show();
});

$("#theme-switcher").click(function () {
  $(this).toggle(".theme-switcher");
});

$(".js-close").click(function () {
  $(".modal-header").css("display", "none");
});

// PROMOTION HEADER
// END PROMOTION 