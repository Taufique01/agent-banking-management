export const isEmptyOrSpacesOnly = (aString) => {
  return !aString.replace(/\s/g, "").length;
};
