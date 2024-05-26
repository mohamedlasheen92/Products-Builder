/**
 *
 * @param {string} str - The string to slice.
 * @param {number} [amount=50] - The maximum length of the sliced string. Defaults to 50.
 * @returns {string} The sliced string.
 */

export const txtSlicer = (str: string, amount: number = 80): string => {
  if (str.length >= amount) return `${str.slice(0, amount)}...`;
  return str;
};
