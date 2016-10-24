import React from 'react';
import './DestinationForm.scss';

const DestinationForm = ({ destinationForm, handleSubmit, handleFormUpdate }) => {
    function onSubmit(e) {
        e.preventDefault();
        handleSubmit(destinationForm.search);
    }

    function onFormUpdate(e) {
        e.preventDefault();
        handleFormUpdate(e.target.name, e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="destination__form">
            <input type="text" placeholder="Search for destinations..." defaultValue="" name="search" onChange={onFormUpdate} className="destination__box"/>
            <input type="submit" className="destination__button" value="GO"/>
        </form>
    )
}

DestinationForm.propTypes = {
    destinationForm: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    handleFormUpdate: React.PropTypes.func.isRequired
};

export default DestinationForm;