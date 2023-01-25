// Type that would contain letters, counts, and the max
type LetterContainer = {
    maximum: number,
    [key: string]: number
}

export const findRepeats = (sentence: string) => {
    const {maximum, ...counts} = (sentence).toLowerCase().split("").reduce(
        (obj:LetterContainer, letter:string) => {
            if(/[a-zA-Z]/.test(letter)){
                // if obj[letter] is counted already, increment count else set the count to 1
                obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
                // if current maximum is lower than the letter's count, the letter's count is the new maximum
                obj.maximum = obj.maximum < obj[letter] ? obj[letter] : obj.maximum;
                return obj;
            }
            else {
                return obj;
            }
        },
        { maximum: 0 }
    );
    const result = Object.entries(counts).filter(([key, value]) => value === maximum);
    const numAtMax = result.length;
    let outputContainer = [];
    for(let i = 0; i < numAtMax; i++){
        outputContainer.push(
            {
                letter: result[i][0],
                count: result[i][1]
            }
        );
    }
    return outputContainer;
}