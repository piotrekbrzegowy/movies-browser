import { useHistory, useLocation } from "react-router-dom";

export const useUrlParameter = (parameter) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(parameter);
};

export const useChangeUrlParameters = () => {
  const history = useHistory();
  const location = useLocation();

  const searchUrlParams = new URLSearchParams(location.search);

  const changeUrlParameters = (parameters) => {
    parameters.forEach(({ key, value }) => {
      if (value === "") {
        searchUrlParams.delete(key);
      } else {
        searchUrlParams.set(key, value);
      }
    });
    history.push(`${location.pathname}?${searchUrlParams.toString()}`);
  };

  return changeUrlParameters;
};
