import React from "react";
import { FormTypes } from "../prop_types/FormTypes";
import { getRepeatedLetter } from "../services/getRepeatedLetter";

// props contains {sentence, setSentence, setResLetter, setResNumber, setErrorStatus, setErrorMessage}

export const RepeatsForm = (props: FormTypes) => {

    const getResult = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        getRepeatedLetter(props.sentence).then((response: any) => {
            // If status is 200, valid sentence was passed
            if(response.status === 200){
                console.log(response);
                props.setErrorStatus(false);
                props.setErrorMessage('');
            }
            else{ // if not, an error is returned
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