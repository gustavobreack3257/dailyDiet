const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;

export function formatDateBr(input: string) {
    console.log('qualquer coisa', input)
    const aa = input.replace(regexData, '$1/$2/$3');
    console.log('aa', aa)
    return aa
  }