const navItems = document.getElementById("nav-items");
const menuIcon = document.querySelector(".menu-icon");
const cancelIcon = document.querySelector(".cancel-icon");
const date = document.querySelector("#date");

// Nav-Toggle
// Show-Links
menuIcon.addEventListener("click", () => {
  navItems.classList.add("show-link");
  cancelIcon.style.zIndex = "0";
});
// Hide-Links
cancelIcon.addEventListener("click", () => {
  navItems.classList.remove("show-link");
  cancelIcon.style.zIndex = "-1";
});

// Date Setup
date.innerHTML = new Date().getFullYear();
