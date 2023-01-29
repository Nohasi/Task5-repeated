import { firstLetter } from "../modules/firstLetter";

describe('passing a valid value', () => {
    it('should properly return the first value alphabetically if multiple values have the same frequency', () => {
        let values = [
            {
                letter: "z",
                count: 5
            },
            {
                letter: "a",
                count: 5
            },
            {
                letter: "m",
                count: 5
            }
        ]
        expect(firstLetter(values)).toStrictEqual({letter: "a", count: 5});
    });
    it('should return the passed value if only one is passed', () => {
        let values = [
            {
                letter: "z",
                count: 5
            },
        ]
        expect(firstLetter(values)).toStrictEqual({letter: "z", count: 5});
    });
})