const sendQuery = require('./helpers/send-Query');
const dotenv = require('dotenv');
const sha256 = require('crypto-js/sha256')
const { CREATE_MESSAGE } = require('./helpers/linkQueries');
const formattedResponse = require('./helpers/formatedData')

dotenv.config();

exports.handler = async (event) => {
    const { text } =  JSON.parse(event.body);

    const variables = { 
        text 
    }

    try {
        const { createMessage: createdMessage } = await sendQuery(CREATE_MESSAGE, variables)
        return formattedResponse (
            200,
            createdMessage
        )
    } catch (error) {
        console.log(error)
        return formattedResponse (
            500,
            {err: 'Something Went Wrong!'}
        )
    }
};