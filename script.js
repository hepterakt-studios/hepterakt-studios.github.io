document.getElementById("year").textContent = new Date().getFullYear();

const loader = document.getElementById("contact-loader");
const contactLinks = document.querySelectorAll(".contact-link");

contactLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const href = link.getAttribute("href");

    loader?.classList.add("is-active");

    setTimeout(() => {
      window.location.href = href;
    }, 1550);
  });
});
