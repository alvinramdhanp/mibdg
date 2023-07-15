const menuList = document.getElementById("menulist");
const menuToggle = document.getElementById("menutoggle");

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("toggler");
});

const hamburger = document.querySelector("#menutoggle");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menuList.contains(e.target)) {
    menuList.classList.remove("toggler");
  }
});
