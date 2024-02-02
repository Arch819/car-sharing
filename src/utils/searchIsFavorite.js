export const searchIsFavorite = (array, id, setChange) => {
  const result = array.find((advert) => advert.id === id);
  if (result) {
    setChange(true);
  }
};
