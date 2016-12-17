import React from 'react';
import './TripForm.scss';

const TripForm = ({ tripForm, handleFormUpdate, handleSubmit }) => {
    function onSubmit(e) {
        e.preventDefault();
        handleSubmit(tripForm);
    }

    function onFormUpdate(e) {
        e.preventDefault();
        handleFormUpdate(e.target.name, e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="trips__form">
            <input type="text" name="name" placeholder="Trip name" onChange={onFormUpdate} className="trips__box"/>
            <input type="submit" value="Add" className="trips__button"/>
        </form>
    )
};

TripForm.propTypes = {
    tripForm: React.PropTypes.object.isRequired,
    handleFormUpdate: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
};

export default TripForm;