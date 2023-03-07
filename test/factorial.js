import { describe } from "mocha";
import { expect } from "chai";

import Factorial from "../math-algorithms/factorial.js";

describe('Factorial', () => {
    describe('validates the correct factorial output without recursion', () => {
        let factorial;
        beforeEach(() => {
            factorial = new Factorial();
        });
        it('4 should return 24', () => {
            expect(factorial.factorial(4)).to.eql(24);
        })
        it('0 should return 1', () => {
            expect(factorial.factorial(0)).to.eql(1);
        })
        it('12 should return 479001600', () => {
            expect(factorial.factorial(12)).to.eql(479001600);
        })
    })
    describe('validates the correct factorial output without recursion', () => {
        let factorial;
        beforeEach(() => {
            factorial = new Factorial();
        });
        it('4 should return [ 0, 1, 1, 2 ]', () => {
            expect(factorial.recursiveFactorial(4)).to.eql(24);
        })
        it('0 should return 1', () => {
            expect(factorial.recursiveFactorial(0)).to.eql(1);
        })
        it('12 should return 479001600', () => {
            expect(factorial.recursiveFactorial(12)).to.eql(479001600);
        })
    })
})