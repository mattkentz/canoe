import React from 'react';
import './Bubble.scss';

const Bubble = ({ inner, caption, index, handleClick }) => {
    return (
        <div className="bubble__block" onClick={() => handleClick(index)}>
            <div className="bubble__bubble">{inner}</div>
            <p>{caption}</p>
        </div>
    )
};

Bubble.propTypes = {
    inner: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    handleClick: React.PropTypes.func,
};

export default Bubble;