import React from "react";

export const ErrorPanel = ({errorMessage} : {errorMessage: string}) => {
    return(
        <div className="row mrgnbtm">
            <div className="blink">
                <h1>{errorMessage}</h1>
            </div>
        </div>
    );
}