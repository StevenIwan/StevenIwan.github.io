// Mobile menu: show or hide the navigation
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("site-nav");

toggle.addEventListener("click", function () {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after choosing a link
nav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();
