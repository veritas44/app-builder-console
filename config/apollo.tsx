import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const cache = new InMemoryCache({ addTypename: false });
const httpLink = createHttpLink({
  uri: 'https://718f5dc18397.ngrok.io/graphql',
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: 'Bearer 444'
    }
  }
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  }
});
export default client;
