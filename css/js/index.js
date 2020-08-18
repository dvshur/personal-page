initMakeAnOrder();

function initMakeAnOrder() {
  var HIDDEN = "hidden";

  var open = document.querySelector(".header__button");
  var modal = document.querySelector(".modal_to-make-order");
  var close = document.querySelector(".modal__button-close");
  var send = document.querySelector("modal__button-send");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(HIDDEN);
  });

  close.addEventListener("click", function () {
    modal.classList.add(HIDDEN);
  });

  send.addEventListener("submit", function () {
    modal.classList.add(HIDDEN);
  });
}
