import React from "react";
import { PanelTypes } from "../prop_types/PanelTypes";

export const ResultPanel = (props: PanelTypes) => {
    return(
    <div style={{backgroundColor:'#c6e2e9'}} className="display-board">
        <h4 style={{color: 'black'}}>Result:</h4>
        <div className="number">
            {// If errorStatus is true, display "Error" instead of a result
            props.errorStatus 
            ? <div>Error</div>
            : <div>{`${props.resLetter.toUpperCase()} : ${props.resNumber}`}</div>
            }
        </div>
    </div>
    );
}