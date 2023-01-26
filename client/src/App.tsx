import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { RepeatsPage } from './components/RepeatsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes to automatically redirect users */}
          <Route path="repeat" element={<RepeatsPage/>}/>
          <Route path="" element={<Navigate to="/repeat"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
