import { TagList, Tag } from "./styled";

export const Tags = ({ tags, genre_ids }) => (
    <TagList>
        {tags.map(tag => {
            return <Tag key={genre_ids}>{tag}</Tag>
        })}
    </TagList>
);
