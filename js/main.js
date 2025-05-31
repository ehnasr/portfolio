import { initDarkMode } from "./components/dark-mode";
import { initHeader } from "./components/header";
import { initPortfolio } from "./components/portfolio";
import { initFooter } from "./components/footer";
import { initAudio } from "./components/audio";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject } from "@vercel/analytics";

initDarkMode();
initHeader();
initPortfolio();
initFooter();
initAudio();
injectSpeedInsights();
inject();
