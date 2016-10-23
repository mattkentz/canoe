import React from 'react';
import './_App.scss';

import Navigation from '../Navigation/Navigation';

const App = ({children}) => {

    return (
        <div className="app">
            <Navigation />
            <section className="content">
                { children }
            </section>
        </div>
    );
}

App.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default App;