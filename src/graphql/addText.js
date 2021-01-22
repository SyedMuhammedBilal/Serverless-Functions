import gql from 'graphql-tag'

export const addText = gql`
    mutation addText($text: String!) {
        addText(text: $text) {
            text
        }
    }
`;