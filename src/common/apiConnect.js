import axios from "axios";

const path = "https://api.themoviedb.org/3/movie/popular?api_key=54628f6d7df0fa35378bd39ea74a55d1&language=en-US&page=1";

export const apiConnect = (path) => {
    return axios.get(path)
    .then(response => response.data)
        .catch(error => console.error(error));
}
