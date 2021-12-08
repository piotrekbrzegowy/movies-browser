import { Loader } from "../Loader";
import { ErrorPage } from "../Error";
import { NoResults } from "../NoResults";

export const StateChecker = ({ children, isLoading, isError, status, results, query }) => {
  return <>
    {
      isLoading ? <Loader />
        : isError ? <ErrorPage />
          : (status === true & results.length === 0) ? <NoResults query={query}/>
            : children
    }
  </>;
};
