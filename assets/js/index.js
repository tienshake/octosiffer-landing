// Menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  console.log("sdas");
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("translate-y-0");
  menu.classList.toggle("-translate-y-full");
  menu.classList.toggle("top-[64px]");

});
