import React from 'react';

const SearchDestinations = ({ searchForm, handleOnSubmit, handleFormUpdate }) => {
    function onSubmit(e) {
        e.preventDefault();
        handleOnSubmit(searchForm.search);
    }

    function onFormUpdate(e) {
        e.preventDefault();
        handleFormUpdate(e.target.name, e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search for destinations..." defaultValue="" name="search" onChange={onFormUpdate}/>
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default SearchDestinations;