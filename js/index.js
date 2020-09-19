var HIDDEN_CLASS = "hidden";
var VISIBLE_M_CLASS = "visible-m";
var OVERLAY = document.querySelector(".modal__overlay");
var MODAL_ORDER = document.querySelector(".modal_to-make-order");

initOpenGallery(HIDDEN_CLASS);

initCallMe(HIDDEN_CLASS, OVERLAY);

initMenuMobile(VISIBLE_M_CLASS, HIDDEN_CLASS);

// order modal related actions
initMakeOrder(HIDDEN_CLASS, MODAL_ORDER, OVERLAY);
initPhotoOrder(HIDDEN_CLASS, MODAL_ORDER, OVERLAY);
initOrderModalClose(HIDDEN_CLASS, MODAL_ORDER, OVERLAY);
initOrderModalSend(HIDDEN_CLASS, MODAL_ORDER, OVERLAY);

function openOverlay(hiddenClass, overlay) {
  overlay.classList.remove(hiddenClass);
}

function closeOverlay(hiddenClass, overlay) {
  overlay.classList.add(hiddenClass);
}

// order modal open
function initMakeOrder(hiddenClass, modal, overlay) {
  var open = document.querySelector(".header__button");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(hiddenClass);
    openOverlay(hiddenClass, overlay);
  });
}

// order modal open
function initPhotoOrder(hiddenClass, modal, overlay) {
  var cards = document.querySelectorAll(".photo__card");

  cards.forEach(function (card) {
    card.addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.remove(hiddenClass);
      openOverlay(hiddenClass, overlay);
    });
  });
}

function initOrderModalClose(hiddenClass, modal, overlay) {
  var close = document.querySelector(".modal_to-make-order-close");

  close.addEventListener("click", function () {
    modal.classList.add(hiddenClass);
    closeOverlay(hiddenClass, overlay);
  });

  overlay.addEventListener("click", function () {
    modal.classList.add(hiddenClass);
    closeOverlay(hiddenClass, overlay);
  });
}

function initOrderModalSend(hiddenClass, modal, overlay) {
  var send = document.querySelector(".modal_to-make-order-actions");

  send.addEventListener("submit", function () {
    modal.classList.add(hiddenClass);
    closeOverlay(hiddenClass, overlay);
  });
}

function initOpenGallery(hiddenClass) {
  var open = document.querySelector(".photo__button");
  var gallery = document.querySelector(".photo__card_gallery");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    open.classList.add(hiddenClass);
    gallery.classList.remove(hiddenClass);
  });
}

// call me modal
function initCallMe(hiddenClass, overlay) {
  var open = document.querySelector(".introduction__button");
  var modal = document.querySelector(".modal_call-me");
  var close = document.querySelector(".modal_call-me__button-close");
  var send = document.querySelector(".modal_call-me-actions");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(hiddenClass);
    openOverlay(hiddenClass, overlay);
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add(hiddenClass);
    closeOverlay(hiddenClass, overlay);
  });

  send.addEventListener("submit", function () {
    modal.classList.add(hiddenClass);
    closeOverlay(hiddenClass, overlay);
  });

  overlay.addEventListener("click", function () {
    modal.classList.add(hiddenClass);
    closeOverlay(hiddenClass, overlay);
  });
}

function initMenuMobile(visibleMClass, hidden) {
  var open = document.querySelector(".mobile__button");
  var close = document.querySelector(".mobile__button-close");
  var menu = document.querySelector(".header__menu");
  var menuElements = document.querySelectorAll(".header__menu-element");

  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove(visibleMClass);
    open.classList.add(visibleMClass);
    close.classList.remove(hidden);
    console.log("close?");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.add(visibleMClass);
    close.classList.add(hidden);
    open.classList.remove(visibleMClass);
  });

  menuElements.forEach(function (menuElement) {
    menuElement.addEventListener("click", function () {
      menu.classList.add(visibleMClass);
      close.classList.add(hidden);
      open.classList.remove(visibleMClass);
    });
  });
}
