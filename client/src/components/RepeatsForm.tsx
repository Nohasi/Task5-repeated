import React from "react";

export const RepeatsForm = () => {
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
                            <button type="submit" className="btn btn-info">What letter was repeated most?</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}