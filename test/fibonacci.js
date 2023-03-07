import Fibonacci from "../math-algorithms/fibonacci.js";
import { describe } from "mocha";
import { expect } from "chai";

describe('Fibonacci', () => {
    describe('validates the correct array of fibonacci array dependent up to the input value', () => {
        let fibonacci;
        beforeEach(() => {
            fibonacci = new Fibonacci();
        });
        it('4 should return [ 0, 1, 1, 2 ]', () => {
            expect(fibonacci.getFibonacciArray(4)).to.eql([0,1,1,2]);
        })
        it('0 should return [ 0, 1 ]', () => {
            expect(fibonacci.getFibonacciArray(0)).to.eql([0, 1]);
        })
        it('7 should return [ 0, 1, 1, 2, 3, 5, 8 ]', () => {
            expect(fibonacci.getFibonacciArray(7)).to.eql([0, 1, 1, 2, 3, 5, 8]);
        })
    })
    describe('returns the correct value based on the input value, being the index position', () => {
        let fibonacci;
        beforeEach(() => {
            fibonacci = new Fibonacci();
        })
        it('3 should return 2', function() {
            expect(fibonacci.recursiveFibonacci(3)).to.equal(2);
        })
        it('16 should return 987', function() {
            expect(fibonacci.recursiveFibonacci(16)).to.equal(987);
        })
        it('0 should return 0', function() {
            expect(fibonacci.recursiveFibonacci(0)).to.equal(0);
        })
    })
})