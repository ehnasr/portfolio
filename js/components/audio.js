export function initAudio() {
  const jazz = document.getElementById("jazz");
  const playBtn = document.querySelectorAll(".play-btn");
  const spokenText = document.querySelectorAll(".spoken");
  const assistant = document.querySelector("#assistant");

  jazz.volume = 0.2;
  assistant.volume = 0.5;
  playBtn.forEach((x) =>
    x.addEventListener("click", () => {
      jazz.paused ? jazz.play() : jazz.pause();
    })
  );

  spokenText.forEach((x) => {
    x.addEventListener("mouseenter", () => {
      const id = x.id;
      assistant.querySelector("source").src = `./audio/${id}.wav`;
      jazz.volume = 0.05;
      assistant.load();
      assistant.play();
    });

    x.addEventListener("mouseleave", () => {
      assistant.pause();
      assistant.currentTime = 0;
      assistant.querySelector("source").removeAttribute("src");
      jazz.volume = 0.2;
    });
  });
}
