import React from "react";
import { FormTypes } from "../prop_types/FormTypes";
import { getRepeatedLetter } from "../services/getRepeatedLetter";

// props contains {sentence, setSentence, setResLetter, setResNumber, setErrorStatus, setErrorMessage}


export const RepeatsForm = (props: FormTypes) => {

    // Handles the text input
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setSentence(e.target.value);
    }

    // Handles button press and calls the fetching function getRepeatedLetters
    const getResult = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // Waits for fetch to return
        getRepeatedLetter(props.sentence).then((response) => {
            // If status is 200, valid sentence was passed
            if(response.status === 200){
                props.setResLetter(response.result.letter);
                props.setResNumber(response.result.count);
                props.setErrorStatus(false);
                props.setErrorMessage('');
                props.setPageInteraction(true);
            }
            else{ // if not, an error is returned
                props.setPageInteraction(true);
                props.setErrorStatus(true);
                props.setErrorMessage(`Error: ${response.error}`);
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Enter Sentence</h2>
                    <form>
                        <div className="row">
                            <input 
                                type="text" 
                                value={props.sentence}
                                // Calls the handleTextInput handler function on change
                                onChange={handleTextInput}
                                maxLength={500}
                                placeholder="Enter Sentence Here!" 
                            />
                        </div>
                        <div className="row">
                            <button type="submit" onClick={getResult} className="btn btn-info">What letter was repeated most?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}