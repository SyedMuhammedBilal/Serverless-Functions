const sendQuery = require('./helpers/send-Query');
const dotenv = require('dotenv');
const { DELETE_MESSAGE } = require('./helpers/linkQueries');
const formattedResponse = require('./helpers/formatedData')

dotenv.config();

exports.handler = async (event) => {
    const { id } =  JSON.parse(event.body);

    const variables = { id }

    try {
        const { deleteMessage: deletedMessage } = await sendQuery(DELETE_MESSAGE, variables)
        return formattedResponse (
            200,
            deletedMessage
        )
    } catch (error) {
        console.log(error)
        return formattedResponse (
            500,
            {err: 'Something Went Wrong!'}
        )
    }
};