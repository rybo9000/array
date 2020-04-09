function arrFilter(arr, value) {
  let filteredArr = [];
  arr.forEach((item) => {
    if (item < value) {
      filteredArr.push(item);
    }
  });
  return filteredArr;
}

arrFilter([1, 2, 6, 7], 5);
