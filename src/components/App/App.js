import React from 'react';
import './App.scss';

import Navigation from '../Navigation/Navigation';

const App = ({children}) => {

    return (
        <div className="">
            <Navigation />
            <section className="">
                { children }
            </section>
        </div>
    );
}

export default App;