$(function () {
  let toggle = 0;

  $(".mobile").on("click", function () {
    if (toggle == 0) {
      $(".mobile").addClass("on");
      $(".menu").addClass("on");
      toggle = 1;
    } else {
      $(".mobile").removeClass("on");
      $(".menu").removeClass("on");
      toggle = 0;
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".top_btn").addClass("on");
    } else {
      $(".top_btn").removeClass("on");
    }
  });

  $(".top_btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
