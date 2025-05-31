export function initPortfolio() {
  // Utility function to generate a random RGB color with each component between 70 and 250
  function randomColor() {
    const hue = Math.trunc(Math.random() * 360) + 1; // full color wheel
    const saturation = Math.trunc(Math.random() * 30) + 51; // 30%–100% saturation
    const lightness = Math.trunc(Math.random() * 30) + 56; // 30%–85% lightness
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  const projects = document.querySelectorAll(".portfolio__project");

  projects.forEach((project) => {
    const infoChildren = project.querySelectorAll(".project__info > *");
    const techChildren = project.querySelectorAll(".tech__stack > *");
    const shimmerOverlay = project.querySelector(".project__shimmer");
    const title = project.querySelector("h2");
    const banner = project.querySelector("h3");

    [...infoChildren, ...techChildren].forEach((item, index) => {
      item.style.transitionDelay = `${0.15 * index}s`;
    });

    project.addEventListener("mouseenter", () => {
      let highlighColor = randomColor();
      console.log(highlighColor);

      project.classList.add("active__project");

      [...infoChildren, ...techChildren].forEach((item) => {
        item.classList.remove("leaving__project");
        item.classList.add("entering__project");
        item.style.borderColor = highlighColor;
      });

      title.style.color = highlighColor;
      banner.style.backgroundColor = highlighColor;
      banner.style.borderColor = "#fff";
    });

    project.addEventListener("mouseleave", () => {
      project.classList.remove("active__project");

      [...infoChildren, ...techChildren].forEach((item) => {
        item.classList.remove("entering__project");
        item.classList.add("leaving__project");
      });
    });
  });
}
