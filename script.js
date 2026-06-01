const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const header = document.getElementById("siteHeader");
const brandMain = document.getElementById("brandMain");
const brandSub = document.getElementById("brandSub");

const mainText = "HEPTERAKT";
const subText = "STUDIOS";

function sliceBackwards(text, amount) {
  const visible = Math.max(0, text.length - amount);
  return text.slice(0, visible);
}

function updateHeader() {
  const y = window.scrollY || window.pageYOffset;
  const progress = Math.min(1, y / 420);

  if (header) {
    header.classList.toggle("is-scrolled", y > 20);
    header.classList.toggle("logo-only", progress > 0.92);
  }

  const mainRemove = Math.floor(progress * mainText.length);
  const subRemove = Math.floor(progress * subText.length);

  if (brandMain) brandMain.textContent = sliceBackwards(mainText, mainRemove);
  if (brandSub) brandSub.textContent = sliceBackwards(subText, subRemove);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
