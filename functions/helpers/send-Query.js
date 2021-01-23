const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

module.exports = async (query, variables) => {
    const result = await axios({
        url: 'https://graphql.faunadb.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNADB_SECRET}`
        },
        data: {
            query,
            variables
        }
    });

    return result.data
};