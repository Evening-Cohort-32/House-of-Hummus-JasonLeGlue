export const Sales = async () => {
  const sales = await fetch(
    "http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side",
  ).then((res) => res.json());

  let salesDivs = sales.map((sale) => {
    const orderPrice =
      sale.entree.price + sale.vegetable.price + sale.side.price;
    return `<div>Receipt #${sale.id} = $${orderPrice}</div>`;
  });

  salesDivs = salesDivs.join("");

  return salesDivs;
};
