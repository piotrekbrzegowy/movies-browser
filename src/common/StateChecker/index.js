import { Loader } from "../Loader";
import { ErrorPage } from "../Error";

export const StateChecker = ({ children, isLoading, isError }) => {
  return <>{isLoading ? <Loader /> : isError ? <ErrorPage /> : children}</>;
};
