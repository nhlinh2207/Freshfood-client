export const $allNumber = (value) => {
      return /^\d+$/.test(value);
}

export const $emptyValue = (value) => {
    return value !== ''
}