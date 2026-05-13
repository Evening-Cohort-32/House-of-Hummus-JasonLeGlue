import { setEntreeId, setSideId, setVegetableId } from "./TransientState.js";
import { renderAllHTML } from "./main.js";

export const handleChoices = (event) => {
  if (event.target.name === "entree") {
    setEntreeId(parseInt(event.target.value));
    renderAllHTML();
  } else if (event.target.name === "veggie") {
    setVegetableId(parseInt(event.target.value));
    renderAllHTML();
  } else if (event.target.name === "side") {
    setSideId(parseInt(event.target.value));
    renderAllHTML();
  }
};
