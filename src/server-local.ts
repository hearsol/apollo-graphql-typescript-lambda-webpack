import { ApolloServer } from 'apollo-server';
import { environment } from './environment';
import { getContext } from './context';

import resolvers from './resolvers';
import typeDefs from './schemas';

export const startServer = () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: environment.apollo.introspection,
    playground: environment.apollo.playground,
    context: (context) => {
      return getContext(context);
    },
  });

  server.listen(environment.port)
    .then(({ url }) => console.log(`Server ready at ${url}. `));


  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
  }
}
