/**
 * Transforma un texto
 *
 * @param {*} str
 * @returns
 */
export const getFormatString = (str: string) => {
  if (!str) return;

  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/:/g, "")
    .replace(/;/g, "")
    .replace(/-/g, "")
    .replace(/,/g, "")
    .replace(/!/g, "")
    .replace(/'/g, "")
    .replace(/\?/g, "")
    .replace(/ñ/g, "n")
    .replace(new RegExp("[àáâäã]", "g"), "a")
    .replace(new RegExp("[èéêë]", "g"), "e")
    .replace(new RegExp("[ìíîï]", "g"), "i")
    .replace(new RegExp("[òóôöõ]", "g"), "o")
    .replace(new RegExp("[ùúûü]", "g"), "u");
};
