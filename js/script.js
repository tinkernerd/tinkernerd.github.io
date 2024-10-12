// Function to load external HTML into an element
function loadHTML(elementId, filePath) {
  const element = document.getElementById(elementId);
  if (element) {
    fetch(filePath)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Failed to load the content.");
      })
      .then((data) => {
        element.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
// Toggle function for interactive sections
function toggleSection(section) {
    const content = section.nextElementSibling;
    const icon = section.querySelector('i');
    content.classList.toggle('open');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}
// Load the nav and footer
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("nav-placeholder", "snippets/nav.html");
  loadHTML("footer-placeholder", "snippets/footer.html");

  // After loading the nav, initialize the dropdown and menu functionality
  document.addEventListener("DOMContentLoaded", function () {
    const doc = document;
    const menuOpen = doc.querySelector(".menu");
    const menuClose = doc.querySelector(".close");
    const overlay = doc.querySelector(".overlay");

    if (menuOpen && menuClose && overlay) {
      menuOpen.addEventListener("click", () => {
        overlay.classList.add("overlay--active");
      });

      menuClose.addEventListener("click", () => {
        overlay.classList.remove("overlay--active");
      });
    }

    // Toggle dropdowns
    const dropdowns = document.querySelectorAll(".nav__links li");

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", function () {
        const subMenu = this.querySelector(".dropdown");
        if (subMenu) {
          subMenu.classList.toggle("dropdown--active");
        }
      });
    });
  });
});

