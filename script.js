// ================= Menu icon for mobile view ===========
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

// ============== Horizontal scroll for reviews =========
const clientComment = document.querySelector('.client-comment');
const btnRight = document.querySelector('.scroll-right');
const btnLeft = document.querySelector('.scroll-left');

btnLeft.addEventListener('click', () => {
    clientComment.scrollBy({left: -300, behavior: "smooth"});
});

btnRight.addEventListener('click', () => {
    clientComment.scrollBy({left: 300, behavior: "smooth"});
})





