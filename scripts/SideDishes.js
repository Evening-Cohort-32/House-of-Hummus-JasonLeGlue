import { transientState } from "./TransientState.js";

export const Sides = async () => {
  const response = await fetch("http://localhost:8088/Sides");
  const sideDishes = await response.json();

  const sidesDivs = sideDishes.map((side) => {
    if (side.id === transientState.sideId) {
      return `<div><input type="radio" name="side" value="${side.id}" checked />${side.title}</div>`;
    } else {
      return `<div><input type="radio" name="side" value="${side.id}" />${side.title}</div>`;
    }
  });

  const html = sidesDivs.join("");
  return html;
};
