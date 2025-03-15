import { expect } from 'chai';
import { describe, it } from 'mocha';
import { insertionSort, quickSort, mergeSort } from '../src/sorting.js';

describe('Sorting Functionality', () => {
    const testInput = [8, 1, 9, 7, 2, 4];
    const expectedOutput = [1, 2, 4, 7, 8, 9];

    it('should sort an array of numbers using insertionSort', () => {
        const result = insertionSort([...testInput]);
        expect(result).to.deep.equal(expectedOutput);
    });

    it('should sort an array of numbers using quickSort', () => {
        const result = quickSort([...testInput]);
        expect(result).to.deep.equal(expectedOutput);
    });

    it('should sort an array of numbers using mergeSort', () => {
        const result = mergeSort([...testInput]);
        expect(result).to.deep.equal(expectedOutput);
    });
});