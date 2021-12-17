import { Input, MagnifierImage, Wrapper } from "./styled";
import search from "../icons/search.svg";
import { useQueryParameter, useReplaceQueryParameter } from "../../../queryParameters";
import SearchQueryParamName from "./searchQueryParamName";

export const Search = () => {
    const query = useQueryParameter(SearchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const moviesTitle = "Search for movies...";
    const peopleTitle = "Search for people..";
    const hashString = window.location.hash;
    const title = hashString.includes("/people") ? peopleTitle : moviesTitle;

    const onInputChange = ({ target }) => {
        replaceQueryParameter([
        {
            key: SearchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        },
        {
            key: "page",
            value: 1,
        }]);
    };

    return (
        <Wrapper>
            <MagnifierImage src={search} alt='magnifier' />
            <Input placeholder={title}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

