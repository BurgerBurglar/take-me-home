const htmlUnescape = (string: string | null) => {
  if (string === null) return null;
  return string.replace("&#039;", "'");
};
export default htmlUnescape;
