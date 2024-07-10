import { config } from "./index.js";

export function addInformation(setTitle, setDescription) {
  config.title = setTitle;
  config.description = setDescription;
}
