type ValueItem = {
    letter:string,
    count: number
}
export const firstLetter = (values: {letter: string;count: any;}[]) => {
    values.sort((a: ValueItem,b: ValueItem)=> {
        if (a.letter < b.letter) {
            return -1;
        }
        if (a.letter > b.letter) {
            return 1;
        }
        return 0;
    })

    return values;

}