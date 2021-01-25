const sendQuery = require('./helpers/send-Query');

const ADD_MESSAGE = `
    mutation($text: String!) {
        addMessage(data: {text: $text}) {
            _id,
            text
        }
    }
`;

exports.handler = async (event) => {
    const { text } =  JSON.parse(event.body);

    const { data, error } = await sendQuery(ADD_MESSAGE, { text });

    if(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            newMessage: data.addMessage
        })
    }
};