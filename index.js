const burger = document.querySelector(".burger");
const navUl = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const form = document.getElementById("searchForm");
const searchFormInput = document.getElementById("searchInput");

// Toogle navigation with the burger
const toogleNav = () => {
  burger.addEventListener("click", () => {
    navUl.classList.toggle("active");

    // Looping through the navLinks
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.3s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // burger animation
    burger.classList.toggle("toggle");
  });
};

toogleNav();

// the search form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(searchFormInput.value);
  searchFormInput.value = "";
});
