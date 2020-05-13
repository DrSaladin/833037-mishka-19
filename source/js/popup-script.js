var popup = document.querySelector(".size-popup");
var popupBlure = document.querySelector(".blure-background");
var links = document.querySelectorAll(".catalog-item__order-cart");


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBlure.classList.contains("popup-cart-show")) {
      popupBlure.classList.remove("popup-cart-show");
      popupBlure.classList.add("visually-hidden");
    }
  }
});

for (var i = 0; i < links.length; i++) {
  let link = links[i];
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBlure.classList.remove("visually-hidden");
    popupBlure.classList.add("popup-cart-show");
  });
}

