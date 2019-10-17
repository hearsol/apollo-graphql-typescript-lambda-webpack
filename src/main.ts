import { ApolloServer } from 'apollo-server-lambda';
import resolvers from './resolvers';
import typeDefs from './schemas';
import { getContext } from './context';

import { startServer as localServer } from './server-local';
import { environment } from './environment';

if (environment.lambda) {
  const server = new ApolloServer({
    typeDefs, resolvers,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground,
    context: (context) => {
      return getContext(context);
    },
  });
  exports.graphqlHandler = server.createHandler();
} else {
  localServer();
}