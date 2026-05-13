export const Veggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables");
  const veggies = await response.json();

  const veggiesDivs = veggies.map((veggie) => {
    return `<div><input type="radio" value="${veggie.id} name="veggies" />${veggie.type}</div>`;
  });

  const html = veggiesDivs.join("");
  return html;
};
