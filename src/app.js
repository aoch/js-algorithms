import {
    insertionSort,
    quickSort
} from './sorting.js';

const testInput = [8, 1, 9, 7, 2, 4];
console.log(insertionSort([...testInput]));
console.log(quickSort([...testInput]));