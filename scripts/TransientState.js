let transientState = { entreeId: 0, vegetableId: 0, sideId: 0 };

export const setEntreeId = (choice) => {
  transientState.entreeId = choice;
};

export const setVegetableId = (choice) => {
  transientState.vegetableId = choice;
};

export const setSideId = (choice) => {
  transientState.sideId = choice;
};
