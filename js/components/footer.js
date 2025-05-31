export function initFooter() {
  const topYear = document.querySelector(".top-year");
  const bottomYear = document.querySelector(".bottom-year");
  const dayDate = document.querySelector(".day");
  const dayTime = document.querySelector(".time");
  const upArrow = document.getElementById("up-arrow");

  addEventListener("scroll", hideTools);
  upArrow.addEventListener("click", toTop);

  function hideTools() {
    const tools = document.querySelector(".footer__tools");
    if (window.pageYOffset > 80) {
      tools.style.display = "flex";
    } else {
      tools.style.display = "none";
    }
  }

  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateClock() {
    const currentDate = new Date();

    dayDate.textContent = currentDate.toLocaleDateString(undefined, {
      weekday: "short",
      month: "long",
      day: "numeric",
    });

    dayTime.textContent = currentDate.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const yearString = currentDate.getFullYear().toString();
    topYear.textContent = yearString.slice(0, 2);
    bottomYear.textContent = yearString.slice(2);
  }

  updateClock();
  setInterval(updateClock, 10000);
}
