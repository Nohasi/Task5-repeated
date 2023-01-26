export const getRepeatedLetter = async (sentence: string) => {
    try {
        const response: Response = await fetch('repeat' , {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                sentence: sentence
            })
        })

        return await response.json();
    }
    catch (error) {
        console.log('error: could not connect to API server');
        return 'error: could not connect to API server';
    }
}