import { findRepeats } from "../modules/findRepeats";

describe('passing a valid value', () => {
    it('should return the letter with the highest frequency', () => {
        expect(findRepeats('aaabcd')).toStrictEqual([{letter: "a", count: 3}]);
    })

    it('should return all letters with the highest frequency if multiple exist in appearance order', () => {
        expect(findRepeats('bbccaaddefg')).toStrictEqual([
            {letter: "b", count: 2},
            {letter: "c", count: 2},
            {letter: "a", count: 2},
            {letter: "d", count: 2}
        ]);
    })

    it('should count both uppercase and lowercase of a character as instances of that character', () => {
        expect(findRepeats('AAAAaaaa')).toStrictEqual([{letter: "a", count: 8}]);
    })
})