function insertDash(num) {
  let newString = num.toString();
  let finalString = '';
  for (let i = 0; i <newString.length; i++) {
    if (newString.charAt(i) % 2 === 0) {
      finalString += newString.charAt(i);
    } else if (newString.charAt(i) % 2 !== 0 && newString.charAt((i+1)) % 2 !== 0) {
      finalString += (newString.charAt(i));
      finalString += '-';
    } else {
      finalString += newString.charAt(i);
    }
  }
  return finalString;
}
