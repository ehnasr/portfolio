export function initDarkMode() {
  const html = document.querySelector("html");
  const darkBtn = document.querySelectorAll(".dark-btn");
  const sun = document.querySelector("#sun");
  const moon = document.querySelector("#moon");
  const isDark = localStorage.getItem("theme");

  let darkMode = false;

  if (isDark) {
    darkMode = true;
    html.classList.add("dark-mode");
    moon.classList.add("hide");
    sun.classList.remove("hide");
  }

  darkBtn.forEach((x) =>
    x.addEventListener("click", () => {
      html.classList.toggle("dark-mode");
      sun.classList.toggle("hide");
      moon.classList.toggle("hide");
      darkMode = !darkMode;

      if (darkMode) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.removeItem("theme");
      }
    })
  );
}
