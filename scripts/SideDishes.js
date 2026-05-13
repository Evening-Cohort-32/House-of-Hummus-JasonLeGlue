export const Sides = async () => {
  const response = await fetch("http://localhost:8088/Sides");
  const sideDishes = await response.json();

  const sidesDivs = sideDishes.map((side) => {
    return `<div><input type="radio" name="sides" value="${side.id}" />${side.title}</div>`;
  });

  const html = sidesDivs.join("");
  return html;
};
