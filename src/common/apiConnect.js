import axios from "axios";

export const apiConnect = (url) => {
    axios.get(url)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}
