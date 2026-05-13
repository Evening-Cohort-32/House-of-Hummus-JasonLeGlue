import { FoodTruck } from "./FoodTruck.js";
import { handleChoices } from "./ChangeListener.js";

const mainContainer = document.querySelector("#container");

export const renderAllHTML = async () => {
  mainContainer.innerHTML = await FoodTruck();
};

renderAllHTML();

document.addEventListener("change", handleChoices);
