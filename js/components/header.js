export function initHeader() {
  // header

  const phrase = document.querySelector(".header__h2");

  const words = ["Full Stack Web Developer", "JavaScript Enthusiast", "Open Source Contributor"];
  addEventListener("DOMContentLoaded", typer);

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function typer() {
    while (true) {
      for (let i = 0; i < words.length; i++) {
        phrase.innerHTML = "";
        const word = words[i];

        for (let j = 0; j < word.length; j++) {
          const letterElement = document.createElement("span");
          letterElement.innerHTML = word[j] === " " ? "&nbsp;" : word[j];
          letterElement.classList.add("letter");
          phrase.appendChild(letterElement);
          await wait(100);
        }

        await wait(1000);
        await deleteWord(word);
      }
    }
  }

  async function deleteWord(s) {
    const letterElements = document.querySelectorAll(".letter");

    for (let i = s.length - 1; i >= 0; i--) {
      await wait(50); //
      letterElements[i].remove();
    }
    await wait(1000);
  }

  // icons

  const icons = document.querySelectorAll(".bx");

  icons.forEach((x) =>
    x.addEventListener("mousemove", () => {
      x.classList.add("bx-tada");
    })
  );
  icons.forEach((x) =>
    x.addEventListener("mouseout", () => {
      x.classList.remove("bx-tada");
    })
  );
}
