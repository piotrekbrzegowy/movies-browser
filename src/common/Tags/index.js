import { TagList, Tag } from "./styled";

export const Tags = ({ tags }) => (
    <TagList>
        {tags.map(tag => {
            return <Tag key={tag}>{tag}</Tag>
        })}
    </TagList>
);
