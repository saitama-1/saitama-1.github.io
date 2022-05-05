// Sort functions

// Sort Number Array by Ascending

// ascendingOrder([1, 5, 2, 3, 4]);
// This would return the value [1, 2, 3, 4, 5].
function ascendingOrder(arr) {
  return arr.slice().sort(function (a, b) {
    return a - b;
  });
}

// Sort Array by Alphabetically

// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
// should return ["a", "a", "c", "d", "g", "z"].
function alphabeticalOrder(arr) {
  return arr.slice().sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

// Sort Array by Reverse Alphabetically

//   reverseAlpha(['l', 'h', 'z', 'b', 's']);
//   This would return the value ['z', 's', 'l', 'h', 'b'].
function reverseAlpha(arr) {
  return arr.slice().sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
