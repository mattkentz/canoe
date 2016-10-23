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

App.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default App;