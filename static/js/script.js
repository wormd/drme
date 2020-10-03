$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    var $header = $("#header");
    $nav.toggleClass('bg-dark', $(this).scrollTop() >= $header.outerHeight(true));
  });
});