const nullifyEmpty = <T extends { length: number }>(original: T) => {
  if (original.length === 0) return undefined;
  return original;
};
export default nullifyEmpty;
