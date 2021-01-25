const sendQuery = require('./helpers/send-Query');

const DELETE_TEXT = `
    mutation($id: ID!) {
        deleteText(id: $id) {
            _id
        }
    }
`;

exports.handler = async (event) => {

    const { id } = JSON.parse(event.body);

    const { data, error } = await sendQuery(DELETE_TEXT, { id });

    if(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            deletedText: data.deleteText
        })
    }
};