function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function bucketSort(array, low, high) {
  const newArray = [];
  for (let i = 0; i < high; i++) {
    newArray[i] = "";
  }
  for (let i = 0; i < array.length; i++) {
    newArray[array[i] - low] = array[i];
  }
  return newArray;
}
const bucketData = [8, 1, 9, 5, 4, 10, 6, 2, 3, 7];
console.log(bucketSort(bucketData, 1, 10));

function shuffle(array, counter = 0) {
  while (counter < array.length) {
    let randomIndex = Math.floor(Math.random() * array.length);
    swap(array, counter, randomIndex);
    counter++;
    return shuffle(array, counter);
  }
  return array;
}

let shuffleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffle(shuffleData));

function SortBooks(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = SortBooks(left);
  right = SortBooks(right);
  return merge(left, right, arr);
}

function main() {
  let listOfNums = [
    21,
    1,
    26,
    45,
    29,
    28,
    2,
    9,
    16,
    49,
    39,
    27,
    43,
    34,
    46,
    40,
  ];
  console.log(mergeSort(listOfNums));
}

main();
