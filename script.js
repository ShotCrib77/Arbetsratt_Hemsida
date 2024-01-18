const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

function scrollToTarget(id) {
  var targetElement = document.getElementById(id);

  console.log(targetElement);

  window.scrollTo({
      top: targetElement.offsetTop - 96 - 34,
      behavior: 'smooth'
  });
}
