import lambda from 'aws-lambda';
import express from 'express';
import { ExecutionParams } from 'subscriptions-transport-ws';

interface LambdaContext {
  event: lambda.APIGatewayProxyEvent, context: lambda.Context
};

export interface ExpressContext {
  req: express.Request;
  res: express.Response;
  connection?: ExecutionParams;
}

export const getContext = async (context: LambdaContext | ExpressContext) => {
  let token = 'no-token';
  if ('event' in context) { // for lambda
    const userContext = {
      context: context.event,
      token
    };
    return userContext;
  } else {
    if (context.req && context.req.header) {
      token = context.req.headers.authorization || token;
      // const user = getUser(token);
    }
    const userContext = {
      context: context.req.headers,
      token
    };
    return userContext;
  }
};