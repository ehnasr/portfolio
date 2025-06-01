// bg

(async () => {
  await loadStarsPreset(tsParticles);

  tsParticles.load({
    id: "stars", // adds white particles
    options: {
      background: {
        color: "transparent",
      },
      particles: {
        number: { value: 150 }, // # of particles
        // color: { value: ["#000"] }, // Particles colors
        size: { value: { min: 1, max: 3 } }, // Random sizes
        //   animation: { // blinking animation
        //     enable: true,
        //     speed: 0,
        //   },
        //   move: {
        //     enable: false, // disables movement
        //   },
      },
      preset: "stars",
    },
  });

  tsParticles.load({
    id: "dust", // add colored particles
    options: {
      background: {
        color: "transparent",
      },
      particles: {
        // number: { value: 50 }, // # of particles
        color: { value: ["#e2c158", "#b88325"] }, // Particles colors
        size: { value: { min: 1, max: 2 } }, // Random sizes
      },

      preset: "stars",
    },
  });
})();
