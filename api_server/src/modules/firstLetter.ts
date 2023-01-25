type ValueItem = {
    letter:string,
    count: number
}
export const firstLetter = (values: {letter: string;count: any;}[]) => {
    
    // Passing function in sort() that compares all letters
    values.sort((letter1: ValueItem, letter2: ValueItem)=> {
        if (letter1.letter < letter1.letter) {
            return -1;
        }
        if (letter1.letter > letter2.letter) {
            return 1;
        }
        return 0;
    })

    // Returning only value at top of list AKA the first one alphabetically
    return values[0];
}