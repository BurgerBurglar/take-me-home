const joinValues = (map: Object) =>
  Object.values(map)
    .filter((value) => typeof value === "string")
    .join(" / ");
export default joinValues;
