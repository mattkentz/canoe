export function fetchDestinations(value) {
    return fetch(`https://restcountries.eu/rest/v1/name/${value}`, {
        method: 'get'
    }).then(function(response) {
        if (response.ok)
            return response.json();

        return Promise.reject(response.statusText);
    }).catch(function(err) {
        return Promise.reject(err);
    });
}