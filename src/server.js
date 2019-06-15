import { GraphQLServers } from "graphql-yoga";
import schema from "./schema";
import "./env";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServers({
  schema
});

server.start({ port: PORT }, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
