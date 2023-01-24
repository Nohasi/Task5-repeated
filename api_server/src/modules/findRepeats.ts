export const findRepeats = (sentence: string) => {
    // Container to store letter frequencies
    const outputContainer: Map<string, number> = new Map();
    const lowerSentence: string[] = sentence.toLowerCase().split("");
    lowerSentence.forEach((char: string) => {
        if((/[a-zA-Z]/).test(char)){
            if(outputContainer.get(char) === undefined){
                outputContainer.set(char, 1);
            }
            else {
                outputContainer.set(char, (outputContainer?.get(char)?? 0) + 1);
            }
        }
    });

    return outputContainer;
}