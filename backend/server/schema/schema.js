const graphql = require("graphql");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const graphQLStatus = [{ id: "1", status: 1 }];

const StatusType = new GraphQLObjectType({
  name: "GraphQlstatus",
  fields: {
    id: { type: GraphQLString },
    status: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    status: {
      type: StatusType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(graphQLStatus, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
