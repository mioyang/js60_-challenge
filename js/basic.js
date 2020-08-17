//隱藏左側選單
let sidenavBtn = document.querySelector("#sidenavBtn");
let sidenavHide = document.querySelector(".has-sidenav-fixed");
sidenavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sidenavHide.classList.toggle("hideSidenav");
});