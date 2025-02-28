document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".header nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
