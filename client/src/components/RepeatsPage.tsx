import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ErrorPanel } from './ErrorPanel';
import { Header } from './Header';
import { RepeatsForm } from './RepeatsForm';
import { ResultPanel } from './ResultPanel';

export const RepeatsPage = () => {
    let [sentence, setSentence] = useState('');
    let [resLetter, setResLetter] = useState('');
    let [resNumber, setResNumber] = useState(0);
    let [pageInteraction, setPageInteraction] = useState(false);

    // Error displays
    let [errorStatus, setErrorStatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <RepeatsForm
                            sentence={sentence}
                            setSentence={setSentence}
                            setResLetter={setResLetter}
                            setResNumber={setResNumber}
                            setErrorStatus={setErrorStatus}
                            setErrorMessage={setErrorMessage}
                            setPageInteraction={setPageInteraction}
                        />
                    </div>
                    <div className="col-md-4">
                        {
                            pageInteraction
                            ? <ResultPanel
                                resLetter={resLetter}
                                resNumber={resNumber}
                                errorStatus={errorStatus}
                            />
                            : <div/>
                        }
                    </div>
                </div>
            </div>
            <div className="container mrgnbtm">
                { // If no process has been done yet, do not show results/error panel
                    errorStatus
                    ? <ErrorPanel 
                        errorMessage={errorMessage}
                    />
                    :<div/>
                }
            </div>
        </div>
    );
}