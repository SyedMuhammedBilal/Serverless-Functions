const sendQuery = require('./helpers/send-Query');

const ADD_TEXT = `
    mutation($text: String!) {
        addText(data: {text: $text}) {
            _id,
            text
        }
    }
`;

exports.handler = async (event) => {
    const { text } =  JSON.parse(event.body);

    const { data, error } = await sendQuery(ADD_TEXT, { text });

    if(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            newText: data.addText
        })
    }
};