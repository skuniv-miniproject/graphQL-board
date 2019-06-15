import { GraphQLServer } from "graphql-yoga";
// import schema from "./schema";
import "./env";

const PORT = process.env.PORT || 4000;
const typeDefs = `
    type Query {
        hello(name : String) : String
    }
`;
//api endpoint 구현
const resolvers = {
  Query: {
    hello: (_, { name }) => {
      return name;
    }
  }
};
const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
