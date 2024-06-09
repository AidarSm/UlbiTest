export const validateValue = (value) => {
  if (value < 1 || value > 100) {
    return false;
  }
  return true;
};
