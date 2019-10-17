import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export default {
  Query: {
    testMessage: (): string => {
      return 'Hello World!';
    },
    token: (parent: any, args: any, context: any) => {
      return context.token;
    }
  }
};