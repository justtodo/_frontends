// jquerie make a burger

$("#js-burger").click(function () {
  $(".modal-header").show();
});

$("#theme-switcher").click(function () {
  $(this).toggle(".theme-switcher");
  // .css("color", "#effb")
  // .css("background", "#000")
  // .css("background-attachement", "fixed");
  //
});
// light
// $(".switch").click(function () {
//   $("body, footer")
//     .toggle()
//     .css("color", "#003")
//     .css("background", "#d8e1e8")
//     .css("background-attachement", "fixed");
//   //
// });
$(".js-close").click(function () {
  $(".modal-header").css("display", "none");
});
