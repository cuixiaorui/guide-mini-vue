export const extend = Object.assign;

export const isObject = (value) => {
  return value !== null && typeof value === "object";
};

export const hasChanged = (newValue, val) => {
  return !Object.is(newValue, val);
};
