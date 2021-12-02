import { useHistory, useLocation } from "react-router-dom";

export const useUrlParameter = (parameter) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(parameter);
};

export const useUrlPageParameters = () => {
  const history = useHistory();
  const location = useLocation();

  const searchUrlParams = new URLSearchParams(location.search);

  const changeUrlParameters = (parameters) => {
    parameters.forEach((target) => {
      if (target.value === "") {
        searchUrlParams.delete(target.key);
      } else {
        searchUrlParams.set(target.key, target.value);
      }
    });

    history.push(`${location.pathname}?${searchUrlParams.toString()}`);
  };

  return changeUrlParameters;
};
