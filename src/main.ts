import { ApolloServer as ApolloServerLocal } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { Config } from 'apollo-server-core';
import resolvers from './resolvers';
import typeDefs from './schemas';
import { getContext } from './context';
import { environment } from './environment';

const config: Config = {
  typeDefs, resolvers,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  context: (context) => {
    return getContext(context);
  }
};

if (environment.lambda) {
  // for lambda
  const server = new ApolloServerLambda(config);
  exports.graphqlHandler = server.createHandler();
} else {
  // for debug
  const server = new ApolloServerLocal(config);
  server.listen(environment.port)
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
}