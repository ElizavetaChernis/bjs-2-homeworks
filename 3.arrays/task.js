function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((item) => arr1[item] === arr2[item]) && arr1.length === arr2.length;
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10)
  return resultArr; // array
}
