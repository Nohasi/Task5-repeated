type ValueItem = {
    letter:string,
    count: number
}
export const firstLetter = (values: {letter: string;count: any;}[]) => {
    
    // Passing function in sort() that compares all letters
    values.sort((letter1: ValueItem, letter2: ValueItem)=>letter1.letter.localeCompare(letter2.letter));
    
    // Returning only value at top of list AKA the first one alphabetically
    return values[0];
}