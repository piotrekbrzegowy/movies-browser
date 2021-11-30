import { useSelector } from "react-redux";
import { selectGenres } from "../commonSlice";
import { TagList, Tag } from "./styled";

export const Tags = ({ genre_ids }) => {

    const genres = useSelector(selectGenres);

    return (
        <TagList>
            {genres.map(({ id, name }) => genre_ids.includes(id) &&
                (<Tag key={id}>{name}</Tag>)
            )}
        </TagList>
    )
};

