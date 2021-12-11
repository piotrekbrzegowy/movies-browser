import { useSelector } from "react-redux";
import { selectGenres } from "../commonSlice";
import { TagList, Tag } from "./styled";

export const Tags = ({ genre_ids, movieDetailsGenres }) => {

    const genres = useSelector(selectGenres);

    return (
        <>
            {genre_ids &&
                <TagList>
                    {genres.map(({ id, name }) => genre_ids.includes(id) &&
                        (<Tag key={id}>{name}</Tag>)
                    )}
                </TagList>}

            {movieDetailsGenres &&
                <TagList>
                    {movieDetailsGenres.map(({ id, name }) => (<Tag key={id}>{name}</Tag>))}
                </TagList>}
        </>
    )
};

