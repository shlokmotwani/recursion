const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  return merge(
    mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
    mergeSort(arr.slice(Math.ceil(arr.length / 2)))
  );
};

const merge = (left, right) => {
  let arr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
  if (i == left.length) {
    arr = arr.concat(right.slice(j));
  } else if (j == right.length) {
    arr = arr.concat(left.slice(i));
  }
  return arr;
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
