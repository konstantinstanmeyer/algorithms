import mergeSort from "../sorting-algorithms/mergeSort.js";
import { describe } from 'mocha';
import { expect } from 'chai';

describe('Merge Sort', () => {
    describe('validates that the returned list is correctly ordered', () => {
        let array;
        beforeEach(() => {
            array = [];
        });
        it('[12,36,-8,14,1] should return [-8,1,12,14,36]', () => {
            array = [12,36,-8,14,1];
            expect(mergeSort(array)).to.eql([-8,1,12,14,36]);
        })
        it('[-24,3,-8,19,2] should return [-24,-8,2,3,19]', () => {
            array = [-24,3,-8,19,2];
            expect(mergeSort(array)).to.eql([-24,-8,2,3,19]);
        })
        it('[0,2,3,1,4] should return [0,1,2,3,4]', () => {
            array = [0,2,3,1,4];
            expect(mergeSort(array)).to.eql([0,1,2,3,4]);
        })
    })
})