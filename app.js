const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const header = document.getElementById("main-header");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
let lastScrollTop = 0;

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("translate-x-full");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Dropdown click handler for mobile
const dropdowns = document.querySelectorAll(".group");
dropdowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");
  const submenu = dropdown.querySelector("ul");
  link.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      submenu.classList.toggle("hidden");
    }
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
    mainNav.classList.add("translate-x-full");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});

// Adjust menu visibility on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mainNav.classList.remove("translate-x-full");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  } else {
    mainNav.classList.add("translate-x-full");
  }
});

// Hide header on scroll down, show on scroll up
window.addEventListener(
  "scroll",
  () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  },
  false
);
