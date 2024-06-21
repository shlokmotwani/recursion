// fibsRec(10) = [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]

function fibs(num) {
  let arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.slice(0, num);
}

function fibsRec(num, arr = [0, 1]){
  if (arr.length >= num) {
    return arr.slice(0, num);
  }

  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec(num, arr);
};

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(10));
console.log(fibsRec(6500));

