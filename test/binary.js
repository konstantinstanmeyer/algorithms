import Binary from "../search-algorithms/binary.js";
import { describe } from "mocha";
import { expect } from "chai";

describe('Binary', () => {
    describe('finds the index position of a given value in an array', () => {
        let binary;
        beforeEach(() => {
            binary = new Binary;
        });
        it('4 should return [ 0, 1, 1, 2 ]', () => {
            expect(binary.binarySearch([1,2,3,4,5], 4)).to.eql(3);
        })
        it('0 should return [ 0, 1 ]', () => {
            expect(binary.binarySearch([4,2,6,2,16], 13)).to.eql(-1);
        })
        it('7 should return [ 0, 1, 1, 2, 3, 5, 8 ]', () => {
            expect(binary.binarySearch([2,9,23,14,52], 23)).to.eql(2);
        })
    })
    describe('returns the correct value based on the input value, being the index position', () => {
        let binary;
        beforeEach(() => {
            binary = new Binary;
        })
        it('3 should return 2', function() {
            expect(binary.recursiveBinarySearch([1,2,3,4,5], 4)).to.eql(3);
        })
        it('16 should return 987', function() {
            expect(binary.recursiveBinarySearch([4,2,6,2,16], 13)).to.eql(-1);
        })
        it('0 should return 0', function() {
            expect(binary.recursiveBinarySearch([2,9,23,14,52], 23)).to.eql(2);
        })
    })
})