import { RoleType } from "@/plugins/constant";

export const isAuthenticated = () => {
    return getLocalStorage(process.env.VUE_APP_ACCESS_TOKEN) || false;
};

export const isAdmin = () => {
    return getLocalStorage(process.env.VUE_APP_ROLE) === RoleType.ADMIN || false;
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
  return true;
}

export function getLocalStorage(key) {
  const stringData = localStorage.getItem(key);
  if (!stringData) {
    return null;
  }
  return stringData;
}

export function parseLocalStorage(key) {
  const stringData = getLocalStorage(key);
  if (!stringData) {
    return null;
  }
  return JSON.parse(stringData);
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
  return true;
}

export const convertPriceString = (val, isVND = false, forceMinus = false) => {
  if (Number(val) == 0) return isVND ? "0 đ" : "FREE";
  if (!val || isNaN(val)) return "";
  // if (!val || isNaN(val)) return "";

  // if val is actually < 0 => forceMinus = true
  if (val < 0) {
    return convertPriceString(Math.abs(val), isVND, true);
  }

  const valStr = typeof val === "string" ? val : val.toString();
  const valDec = valStr.split(".")[0];

  var result =
    valDec.replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
    }) + (isVND ? " đ" : "");

  return `${forceMinus ? "- " : ""}` + result;
};

export const sleep = (milliseconds = 100) => {
  return new Promise((resolve) => {
    var timeout = setTimeout(() => {
      clearTimeout(timeout);
      resolve();
    }, milliseconds);
  });
};
