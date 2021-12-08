import { Subtitle } from "../Subtitle";


export const NoResults = ({ query }) => {

    return (
        <>
            <Subtitle title={`Sorry, there are no results for "${query}"`} />

        </>
    );
};