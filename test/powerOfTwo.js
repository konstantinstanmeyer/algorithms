import PowerOfTwo from "../math-algorithms/powerOfTwo/code.js";
import { describe } from "mocha";
import { expect } from "chai";

describe('Power-of-Two', () => {
    describe('validates the correct array of fibonacci array dependent up to the input value', () => {
        let powerOfTwo;
        beforeEach(() => {
            powerOfTwo = new PowerOfTwo;
        });
        it('4 should return [ 0, 1, 1, 2 ]', () => {
            expect(powerOfTwo.isPowerOfTwo(4)).to.eql(true);
        })
        it('0 should return [ 0, 1 ]', () => {
            expect(powerOfTwo.isPowerOfTwo(5)).to.eql(false);
        })
        it('7 should return [ 0, 1, 1, 2, 3, 5, 8 ]', () => {
            expect(powerOfTwo.isPowerOfTwo(1024)).to.eql(true);
        })
    })
    describe('returns the correct value based on the input value, being the index position', () => {
        let powerOfTwo;
        beforeEach(() => {
            powerOfTwo = new PowerOfTwo();
        })
        it('3 should return 2', function() {
            expect(powerOfTwo.isPowerOfTwoBitWise(4)).to.equal(true);
        })
        it('16 should return 987', function() {
            expect(powerOfTwo.isPowerOfTwoBitWise(5)).to.equal(false);
        })
        it('0 should return 0', function() {
            expect(powerOfTwo.isPowerOfTwoBitWise(1024)).to.equal(true);
        })
    })
})