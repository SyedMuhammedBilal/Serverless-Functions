const { ApolloServer, gql } = require('apollo-server-lambda');
var dotenv = require('dotenv');
var faunadb = require('faunadb')
var q = faunadb.query;

const typeDef = gql(`
    type Query {
        texts: [Message!]
    }

    type Message {
        id: ID!
        text: String!
    }
`);

const resolvers = {
    Query: {
        texts: async (root, args, context) => {
            try {
                var adminClient = new faunadb.Client({secret: process.env.FAUNADB_SECRET});

                const result = await adminClient.query(
                    q.Create(
                        q.Collection('Text'),
                        { data: {
                            
                        } }
                    )
                )
            } catch (error) {
                 
            }
        }
    }
};