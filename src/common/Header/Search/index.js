import { Input, MagnifierImage, Wrapper } from "./styled";
import search from "../icons/search.svg";
import { useQueryParameter, useReplaceQueryParameter } from "../../../queryParameters";
import SearchQueryParamName from "./searchQueryParamName";

export const Search = () => {
    const query = useQueryParameter(SearchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: SearchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
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

