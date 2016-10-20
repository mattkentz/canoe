import React from 'react';
import './App.scss';

const App = ({children}) => {

    return (
        <div className="app">
            <div className="results">
                { children }
            </div>
        </div>
    );
}

export default App;