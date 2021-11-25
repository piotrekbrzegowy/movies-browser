import axios from "axios";

export const apiConnect = (url) => {
    return axios.get(url)
    .then(response => response.data)
        .catch(error => console.error(error));
}
