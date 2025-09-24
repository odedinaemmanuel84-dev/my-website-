// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("✅ Thank you for contacting me! I will get back to you soon.");
  this.reset();
});

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
