import { getAccessToken, clearAccessToken } from '#/shared/ultils/localStorage';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({ uri: 'https://api.escuelajs.co/graphql' });

// cached storage for the user token
const withToken = setContext(() => {
  const token = getAccessToken();

  return { token };
});

const resetToken = onError(({ networkError }) => {
  if (networkError && networkError.name === 'ServerError') {
    // remove cached token on 401 from the server
    clearAccessToken();
  }
});

const authTokenFlowLink = withToken.concat(resetToken);

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext();
  operation.setContext(({ headers = {} }) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  uri: 'https://api.escuelajs.co/graphql',
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink, authTokenFlowLink]),
});
