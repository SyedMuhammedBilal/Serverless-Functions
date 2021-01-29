const GET_MESSAGES = `
    query {
        allMessages {
            data {
                _id
                text
                archived
            }
        }
    }
`

const CREATE_MESSAGE = `
    mutation($text: String!, $archived: Boolean!) {
        createMessage(data: { text: $text, archived: $archived }) {
            _id
            text
            archived
        }
    }
`

const UPDATE_MESSAGE = `
    mutation($id: ID!, $text: String!, $archived: Boolean!) {
        updateMessage(id: $id, data: { text: $text, archived: $archived }) {
            _id
            text
            archived
        }
    }
`

const DELETE_MESSAGE = `
    mutation($id: ID!) {
        deleteMessage(id: $id) {
            _id
        }
    }
`

module.exports = {
    CREATE_MESSAGE,
    UPDATE_MESSAGE,
    GET_MESSAGES,
    DELETE_MESSAGE
}