const sendQuery = require('./helpers/send-Query');

const GET_TEXT = `
    query {
        allText {
            _id,
            text
        }
    }
`;

exports.handler = async () => {

    const { data, error } = await sendQuery(GET_TEXT);

    if(error) {
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            notes: data.allText.data
        })
    }
};