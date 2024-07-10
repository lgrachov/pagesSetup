const yaml = require("yaml");

export function convert(json) {
  const doc = new yaml.Document();
  doc.contents = json;
  return doc.toString();
}
