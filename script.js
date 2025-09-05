const pickMenuIcon= document.querySelector(".menu-icon");
const pickMenu = document.querySelector(".menu")

pickMenuIcon.addEventListener("click", () => {
 pickMenu.classList.toggle("open");
  document.documentElement.classList.toggle("menu-open");
  if (pickMenuIcon.textContent === "☰"){
    pickMenuIcon.textContent = "✖";
  } else {
    pickMenuIcon.textContent = "☰";
  }
});
