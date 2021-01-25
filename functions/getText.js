const sendQuery = require('./helpers/send-Query');

const GET_ALL_MESSAGES = `
    query {
        allMessages {
            _id,
            text
        }
    }
`;

exports.handler = async () => {

    const { data, error } = await sendQuery(GET_ALL_MESSAGES);

    if(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            messages: data.allMessages.data
        })
    }
};