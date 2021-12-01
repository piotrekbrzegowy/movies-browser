import { Input, MagnifierImage, Wrapper } from "./styled"
import search from "../icons/search.svg";
import { useHistory, useLocation } from "react-router";

export const Search = () => {

    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search).get("szukaj"));

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search)
        if (target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <MagnifierImage src={search} alt='magnifier' />
            <Input placeholder="Search for movies..." 
            value={query || ""}
            onChange={onInputChange}
            />
        </Wrapper>
    )
}

