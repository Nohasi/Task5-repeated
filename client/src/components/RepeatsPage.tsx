import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Header } from './Header';
import { RepeatsForm } from './RepeatsForm';
import { ResultPanel } from './ResultPanel';

export const RepeatsPage = () => {

    let [num, setNum] = useState('');
    let [resLetter, setResLetter] = useState('');
    let [resNumber, setResNumber] = useState(0);
    let [errorStatus, setErrorStatus] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="App">
            <Header/>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <RepeatsForm/>
                    </div>
                    <div className="col-md-4">
                        <ResultPanel/>
                    </div>
                </div>
            </div>
        </div>
    );
}