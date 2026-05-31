document.getElementById("year").textContent = new Date().getFullYear();

const lottie = document.querySelector("lottie-player");
const fallback = document.querySelector(".lottie-fallback");

function hideFallback() {
  if (fallback) fallback.style.opacity = "0";
}

if (lottie) {
  lottie.addEventListener("ready", hideFallback);
  lottie.addEventListener("load", hideFallback);
  setTimeout(() => {
    if (lottie.shadowRoot || lottie.getLottie) hideFallback();
  }, 1400);
}
