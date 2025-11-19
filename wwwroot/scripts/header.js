document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector("#menuToggle");
  const menu = document.querySelector("#mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});