import {isNum} from '../src/index2';
// import isNum from '../src/index2';

describe('index2.js:', () => {
    it('isNum() should work fine.', () => {
        expect(isNum(1)).toBe(true);
        expect(isNum('1')).toBe(false);
    });
});