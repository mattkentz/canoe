import React from 'react';
import './SearchDestinations.scss';

const SearchDestinations = ({ searchDestinationForm, handleSubmit, handleFormUpdate }) => {
    function onSubmit(e) {
        e.preventDefault();
        handleSubmit(searchDestinationForm.search);
    }

    function onFormUpdate(e) {
        e.preventDefault();
        handleFormUpdate(e.target.name, e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className="search__form">
            <input type="text" placeholder="Search for destinations..." defaultValue="" name="search" onChange={onFormUpdate} className="search__box"/>
            <input type="submit" className="search__button" value="GO"/>
        </form>
    )
}

SearchDestinations.propTypes = {
    searchDestinationForm: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    handleFormUpdate: React.PropTypes.func.isRequired
};

export default SearchDestinations;