const navToggle = document.querySelector(".btn-toggle");
const links = document.querySelector(".navbar-links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("open-links");
});
