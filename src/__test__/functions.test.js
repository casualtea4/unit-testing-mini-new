import {add} from '../utils/functions';

test('add returns the sum of 2 numbers', () => {
    expect(add(1,2)).toBe(3);
});
test('add returns the sum of 2 numbers that are strings', () => {
    expect(add('1','2')).toBe(3);
});
test('add returns NaN if non numbers are passed', () => {
    expect(add('hello','test')).toBeNaN();
});
