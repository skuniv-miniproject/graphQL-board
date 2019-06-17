import { GraphQLServer } from "graphql-yoga";
// import schema from "./schema";
import "./env";

const PORT = process.env.PORT || 4000;
const typeDefs = `
    type Query {
        hello(name : String , age : Int) : [String]
    }
`;
//api endpoint 구현
const resolvers = {
  Query: {
    hello: (_, args) => {
      const { name, age } = args;
      const temp = [];
      temp.push(name);
      temp.push(age);
      return temp;
    }
  }
};
const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
