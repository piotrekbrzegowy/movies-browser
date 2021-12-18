import { SpinnerContainer, Spinner } from "./styled";
import spinner from "../../assets/spinner.svg";

export const Loader = () => {
    return (
        <SpinnerContainer>
            <Spinner src={spinner} />
        </SpinnerContainer>)
};