import 'whatwg-fetch';

let genreApi = {
    fetchGenres() {
        return fetch('http://localhost:8000/api/genres')
            .then((response) => response.json());
    },


};

export default genreApi;