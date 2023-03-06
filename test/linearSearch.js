import linearSearch from '../search-algorithms/linearSearch.js'
import { describe } from 'mocha'
import { expect } from 'chai'

describe('Linear', () => {
    describe('validates correct index from array input and target value', () => {
        it('([1,2,3,4,5], 4) should return 3', () => {
            expect(linearSearch([1,2,3,4,5], 4)).to.eql(3);
        })
        it('([4,2,6,2,16], 13) should return -1', () => {
            expect(linearSearch([4,2,6,2,16], 13)).to.eql(-1);
        })
        it('([2,9,23,14,52], 23) should return 2', () => {
            expect(linearSearch([2,9,23,14,52], 23)).to.eql(2);
        })
    })
})