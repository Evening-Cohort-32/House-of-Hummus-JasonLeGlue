import { FoodTruck } from "./FoodTruck.js";
import { handleChoices } from "./ChangeListener.js";
import { createOrder } from "./TransientState.js";

const mainContainer = document.querySelector("#container");

export const renderAllHTML = async () => {
  mainContainer.innerHTML = await FoodTruck();
};

renderAllHTML();

document.addEventListener("change", handleChoices);
document.addEventListener("click", (event) => {
  if (event.target.id === "purchase") {
    createOrder();
  }
});
document.addEventListener("newOrderCreated", (event) => {
  console.log("State of data has changed. Regenerating HTML");
  renderAllHTML();
});
