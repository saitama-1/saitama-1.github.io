$(document).ready(function () {
  $(".bookmark-bar__btn").click(function () {
    if ($(".bookmark-bar").css("display") != "none") {
      $(".bookmark-bar").css("display", "none");
      $(".bookmark-bar__collapse-icon").css("display", "none");
      $(".bookmark-bar__expand-icon").css("display", "block");
      $(".bookmark-bar__btn").css({ left: "0.3rem" });
    } else {
      $(".bookmark-bar").css("display", "block");
      $(".bookmark-bar__expand-icon").css("display", "none");
      $(".bookmark-bar__collapse-icon").css("display", "block");
      $(".bookmark-bar__btn").css({ left: "20.3rem" });
    }
  });
});
