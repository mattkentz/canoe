import React from 'react';

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
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search for destinations..." defaultValue="" name="search" onChange={onFormUpdate}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

SearchDestinations.propTypes = {
    searchDestinationForm: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    handleFormUpdate: React.PropTypes.func.isRequired
};

export default SearchDestinations;