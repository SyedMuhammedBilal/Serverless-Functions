const { ApolloServer, gql } = require('apollo-server-lambda');
var dotenv = require('dotenv');
var faunadb = require('faunadb')
var q = faunadb.query;

const typeDef = gql(`
    type Query {
        texts: [Message!]
    }

    type Mutation {
        addText(text: String!): Message
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
                    q.Map(
                        q.Paginate(
                            q.Match(
                                q.Index('text')
                            )
                        ),  
                        q.Lambda(x => q.Get(x))
                    )
                )
                console.log(result.ref.data);
                return [{}]
            } catch (error) {
                console.log(error)
            }
        }
    },

    Mutation: {
        addText: async (_, { text }) => {
            try {
                var adminClient = new faunadb.Client({secret: process.env.FAUNADB_SECRET});

                const result = await adminClient.query(
                    q.Create(
                        q.Collection('Text'), {
                            data: {
                                text: text,
                            }
                        }
                    )
                )
            } catch (error) {
                console.log(error)
            }
        }
    }
};

const server = new ApolloServer ({
    resolvers
})

exports.handler = server.createHandler();