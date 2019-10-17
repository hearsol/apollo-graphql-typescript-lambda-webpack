if (process.env.LAMBDA !== 'true') {
  require('dotenv').config();
}

const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  port: number | string;
  lambda: boolean;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  port: process.env.PORT || defaultPort,
  lambda: process.env.LAMBDA === 'true'
};
