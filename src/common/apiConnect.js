import axios from "axios";

export const apiConnect = (path) => {
    return axios.get(path)
    .then(response => response.data);
}
