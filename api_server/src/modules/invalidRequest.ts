import { Request } from "express"
export const invalidRequest = (req: Request) => {

    if(!("sentence" in req.body)){
        return "'Sentence' parameter was not passed";
    }

    if(typeof(req.body.sentence) !== "string"){
        return "Value passed was not a string";   
    }

    if(req.body.sentence === ""){
        return "Sentence is empty";
    }
    
    if(!/[a-z]/i.test(req.body.sentence)){
        return "No alphabetical characters were found";
    }

    if(req.body.sentence.length > 500){
        return "Text passed is too long";
    }

    return null;
}