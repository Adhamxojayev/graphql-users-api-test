import { gql } from "apollo-server-express";
import fs from "fs";
import path from "path";

import resolvers from "./resolvers.js";
const schema = fs.readFileSync(
  path.join(process.cwd(), "src", "modules", "types", "schema.gql")
);

export default {
  typeDefs: gql`
    ${schema}
  `,
  resolvers,
};
