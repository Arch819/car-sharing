import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

const models = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];
export const modelList = [
  { value: "all", label: "All" },
  ...models.map((model) => ({
    value: model,
    label: capitalizeFirstLetter(model),
  })),
];
