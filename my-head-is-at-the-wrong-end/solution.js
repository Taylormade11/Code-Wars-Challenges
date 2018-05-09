function fixTheMeerkat(arr) {
  return arr.reverse();
}

function fixTheMeerkat(arr) {
  let newArray = [];
  arr.forEach(function(piece) {
    newArray.unshift(piece);
  }); return newArray;
}

function fixTheMeerkat(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i]);
  } return newArray;
}

