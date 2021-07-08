$(function () {
  $(".open-menu").click(function () {
    document.getElementsByClassName("menu-mobile-list")[0].style.margin = "0";
  });
});

$(function () {
  $(".close-menu").click(function () {
    document.getElementsByClassName("menu-mobile-list")[0].style["marginRight"] = "-80em";
  });
});
