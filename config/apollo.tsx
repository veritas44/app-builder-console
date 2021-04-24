import { ApolloClient, InMemoryCache } from '@apollo/client';
const cache = new InMemoryCache({ addTypename: false });
const client = new ApolloClient({
  uri: 'https://2e458b918571.ngrok.io/graphql',
  cache,
});
export default client;
