var popup = document.querySelector(".main-nav__popup");
var burger = document.querySelector(".burger");

burger.addEventListener("click", function() {
    if (popup.classList.contains('main-nav__popup--closed')) {
      popup.classList.remove("main-nav__popup--closed");
      burger.classList.add("open");
    } else {
        popup.classList.add("main-nav__popup--closed");
        burger.classList.remove("open");
    }
});
