const priceList = () => {
  const price = [{ value: "all", label: "All" }];
  for (let i = 10; i <= 500; i += 10) {
    price.push({ value: i, label: `${i}$` });
  }
  return price;
};

export default priceList();
