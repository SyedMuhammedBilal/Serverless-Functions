const sendQuery = require('./helpers/send-Query');

const DELETE_MESSAGE = `
    mutation($id: ID!) {
        deleteMessage(id: $id) {
            _id
        }
    }
`;

exports.handler = async (event) => {

    const { id } = JSON.parse(event.body);

    const { data, error } = await sendQuery(DELETE_MESSAGE, { id });

    if(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            deletedMessage: data.deleteMessage
        })
    }
};