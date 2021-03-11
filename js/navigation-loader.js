const navigation__loader = document.querySelector(".navigation__loader");
const banner = document.querySelector(".banner");
banner.addEventListener("load", navigation__loader.style.display = "none");