const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;

export function formatDateBr(input: string) {

    const aa = input.replace(regexData, '$1/$2/$3');

    return aa
  }