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

export {
    insertionSort,
    quickSort
};