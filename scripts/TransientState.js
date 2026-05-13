export let transientState = { entreeId: 0, vegetableId: 0, sideId: 0 };

export const setEntreeId = (choice) => {
  transientState.entreeId = choice;
};

export const setVegetableId = (choice) => {
  transientState.vegetableId = choice;
};

export const setSideId = (choice) => {
  transientState.sideId = choice;
};

export const createOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  if (
    transientState.entreeId != 0 &&
    transientState.vegetableId != 0 &&
    transientState.sideId != 0
  ) {
    const response = await fetch("http://localhost:8088/orders", postOptions);
  }
};
