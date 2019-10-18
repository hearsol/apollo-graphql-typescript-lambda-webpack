export default {
  Query: {
    testMessage: (): string => {
      return 'Hello World!';
    },
    token: (parent: any, args: any, context: any) => {
      return context.token;
    },
    context: (parent: any, args: any, context: any) => {
      return context.context;
    }
  }
};