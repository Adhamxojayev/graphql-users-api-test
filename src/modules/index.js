import { makeExecutableSchema } from "@graphql-tools/schema";

import userModul from './user/index.js'
import typesModul from './types/index.js'

export default makeExecutableSchema({
    typeDefs: [
        userModul.typeDefs,
        typesModul.typeDefs
    ],
    resolvers: [
        userModul.resolvers,
        typesModul.resolvers
    ]
})