/**
 *
 * @param {string} str - The string to slice.
 * @param {number} [amount=100] - The maximum length of the sliced string. Defaults to 100.
 * @returns {string} The sliced string.
 */

export const txtSlicer = (str: string, amount: number = 100): string => {
  if (str.length >= 50) return `${str.slice(0, amount)}...`;
  return str;
};
