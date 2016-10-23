export function fetchDestinations(value) {
    return fetch(`https://restcountries.eu/rest/v1/name/${value}`, {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).catch(function(err) {
        return err;
    });
}