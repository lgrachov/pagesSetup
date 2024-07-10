import { config } from "./index.js";
const supportedThemes = [
  "pages-themes/tactile@v0.2.0",
  "pages-themes/merlot@v0.2.0",
  "pages-themes/architect@v0.2.0",
  "pages-themes/slate@v0.2.0",
  "pages-themes/midnight@v0.2.0",
  "pages-themes/time-machine@v0.2.0",
  "pages-themes/cayman@v0.2.0",
  "pages-themes/leap-day@v0.2.0",
  "pages-themes/modernist@v0.2.0",
  "pages-themes/dinky@v0.2.0",
  "pages-themes/primer@v0.2.0",
  "pages-themes/minimal@v0.2.0",
  "pages-themes/hacker@v0.2.0",
];

export function setTheme(setTheme) {
  if (supportedThemes.includes(setTheme)) {
    config.remote_theme = setTheme;
  } else {
    console.error(`Theme ${setTheme} is not available`);
  }
}
