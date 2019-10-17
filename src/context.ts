import * as express from 'express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export const getContext = async (context: ExpressContext) => {
  let token = 'no-token';
  if (context.req && context.req.header) {
    token = context.req.headers.authorization || token;
    // const user = getUser(token);
  }
  const userContext = { token };
  return userContext;
};