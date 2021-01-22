import gql from 'graphql-tag';

export const getText = gql`
    {
        texts {
            id,
            text
        }
    }
`;