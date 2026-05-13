import { transientState } from "./TransientState.js";

export const Veggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables");
  const veggies = await response.json();

  const veggiesDivs = veggies.map((veggie) => {
    if (veggie.id === transientState.vegetableId) {
      return `<div><input type="radio" name="veggie" value="${veggie.id}" checked />${veggie.type}</div>`;
    } else {
      return `<div><input type="radio" name="veggie" value="${veggie.id}" />${veggie.type}</div>`;
    }
  });

  const html = veggiesDivs.join("");
  return html;
};
