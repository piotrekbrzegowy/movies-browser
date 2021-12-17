import { useHistory, useLocation } from "react-router";

export const useQueryParameter = key => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    const searchParams = new URLSearchParams(location.search);

    const replaceQueryParameters = (parameters) => {
        parameters.forEach(({ key, value }) => {
            if (value === "") {
                searchParams.delete(key);
            } else {
                searchParams.set(key, value);
            }
        });

        history.push(`${location.pathname.includes("movie") ? "/movies" : "/people"}?${searchParams.toString()}`);
    };

    return replaceQueryParameters;
};