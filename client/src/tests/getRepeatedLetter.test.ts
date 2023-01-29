import {getRepeatedLetter} from '../services/getRepeatedLetter';

test('it performs API requests correctly', () => {
    getRepeatedLetter("Hello world").then((response) => {
        expect(response.status).toEqual(200);
        expect(response.result.letter).toBe('l');
    });
});

describe('Invalid client requests', () => {
    it('returns an error when submitting empty string', () => {
        getRepeatedLetter("").then((response) => {
            expect(response.status).toEqual(406);
            expect(response.error).toBe("Sentence is empty")
        })
    });

    it('returns an error when no alphabetical characters are passed', () => {
        getRepeatedLetter("237942168").then((response) => {
            expect(response.status).toEqual(406);
            expect(response.error).toBe("No alphabetical characters were found")
        })
    });
});