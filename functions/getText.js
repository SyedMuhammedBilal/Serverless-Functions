const sendQuery = require('./helpers/send-Query');
const dotenv = require('dotenv');
const { GET_MESSAGES } = require('./helpers/linkQueries');
const formattedResponse = require('./helpers/formatedData')

dotenv.config();

exports.handler = async () => {
    try {
        const res = await sendQuery(GET_MESSAGES)
        const data = res.allMessages.data
        return formattedResponse (
            200,
            data
        )
    } catch (error) {
        console.log(error)
        return formattedResponse (
            500,
            {err: 'Something Went Wrong!'}
        )
    }
};