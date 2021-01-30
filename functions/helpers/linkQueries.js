const GET_MESSAGES = `
    query {
        allMessages {
            data {
                _id
                text
            }
        }
    }
`

const CREATE_MESSAGE = `
    mutation($text: String!) {
        createMessage(data: { text: $text }) {
            _id
            text
        }
    }
`

const UPDATE_MESSAGE = `
    mutation($id: ID!, $text: String!, ) {
        updateMessage(id: $id, data: { text: $text }) {
            _id
            text
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