const sendQuery = require('./helpers/send-Query');

const ADD_MESSAGE = `
    mutation($text: String!) {
        addMessage(data: {text: $text}) {
            _id,
            text
        }
    }
`;

exports.handler = async event => {
    const { text } =  JSON.parse(event.body);

    const { data, errors } = await sendQuery(ADD_MESSAGE, { text });

    if(errors) {
        return {
            statusCode: 500,
            body: JSON.stringify(errors)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            newMessage: data.addMessage
        })
    }
};