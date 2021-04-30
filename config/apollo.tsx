import { ApolloClient, InMemoryCache } from '@apollo/client';
const cache = new InMemoryCache({ addTypename: false });
const client = new ApolloClient({
  uri: 'https://appbuilder-api.channelize.io/graphql',
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  }
});
export default client;
