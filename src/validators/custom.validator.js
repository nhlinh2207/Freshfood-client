export const $allNumber = (value) => {
      return /^\d+$/.test(value);
}

export const $nullValue = (value) => {
    return value !== ''
}