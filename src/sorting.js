const insertionSort = (arr) => {
    if (!Array.isArray(arr))
        return [];

    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--)
            arr[j + 1] = arr[j]

        arr[j + 1] = currentValue;
    }
    return arr;
};

const quickSort = (arr) => {
    if (!Array.isArray(arr))
        return [];

    if (arr.length < 2)
        return arr;

    const pivotIndex = Math.floor(arr.length / 2);
    const pivotValue = arr[pivotIndex];
    const smaller = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex)
            continue;

        arr[i] <= pivotValue ? smaller.push(arr[i]) : greater.push(arr[i]);
    }

    return [].concat(quickSort(smaller), [pivotValue], quickSort(greater));
};

const mergeSort = (arr) => {
    return !Array.isArray(arr) ? [] : _mergeSort(arr, [...arr], 0, arr.length);
};

const _mergeSort = (arr, result, start, end) => {

    if (end - start < 2)
        return result;

    if (end - start === 2) {
        if (result[start] > result[start + 1]) {
            let tempValue = result[start];
            result[start] = result[start + 1];
            result[start + 1] = tempValue;
        }
        return result;
    }

    const middle = Math.floor((start + end) / 2);

    _mergeSort(result, arr, start, middle);
    _mergeSort(result, arr, middle, end);

    let i = start;
    let j = middle;
    let idx = start;

    while (idx < end) {
        if (j >= end || (i < middle && arr[i] < arr[j])) {
            result[idx] = arr[i];
            i++;
        } else {
            result[idx] = arr[j];
            j++;
        }
        idx++;
    }

    return result;
};

export {
    insertionSort,
    quickSort,
    mergeSort
};