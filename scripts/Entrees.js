export const Entrees = async () => {
  const response = await fetch("http://localhost:8088/entrees");
  const entrees = await response.json();

  const entreesDivs = entrees.map((entree) => {
    return `<div><input type="radio" name="entree" value="${entree.id}" />${entree.name}</div>`;
  });
  const html = `${entreesDivs.join("")}`;

  return html;
};
