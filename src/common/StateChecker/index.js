import { Loader } from "../Loader";

export const StateChecker = ({ children, isLoading, isError }) => {
    return (
        <>
            {
                isLoading ? <Loader />
                    : isError ? "Error screen here"
                        : children
            }
        </>
    )
};