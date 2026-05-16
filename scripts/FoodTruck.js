import { Entrees } from "./Entrees.js";
import { Veggies } from "./Vegetables.js";
import { Sides } from "./SideDishes.js";
import { Sales } from "./Sales.js";

export const FoodTruck = async () => {
  const salesHTML = await Sales();
  const entreesHTML = await Entrees();
  const veggiesHTML = await Veggies();
  const sidesHTML = await Sides();

  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <span class="choices">
            <article class="options">
            ${entreesHTML}
            </article>
            <article class="options">
            ${veggiesHTML}
            </article>
            <article class="options">
            ${sidesHTML}
            </article>
        </span>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
            
        </article>

    `;
};
