var link = document.querySelector(".feedback__send-btn");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=feedback-name]");
var password = popup.querySelector("[name=feedback-surname]");
var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("feedback-name");
  } catch (err) {
    isStorageSupport = false;
  }
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    name.value = storage;
  }
  feedback-name.focus();
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!feedback-name.value || !feedback-surname.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести имя, фамилию, номер телефона и электронную почту");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedback-name", feedback-name.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
