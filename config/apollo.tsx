import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
const cache = new InMemoryCache({ addTypename: false });
const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://appbuilder-api.channelize.io/graphql', fetch }),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  }
});
export default client;
