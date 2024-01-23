import {ReactNode} from 'react';
import {Client, Provider, cacheExchange, fetchExchange} from 'urql';

const client = new Client({
  url: 'https://graph.cdn.timeless-internal.net/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export function UrQlProvider({children}: {children: ReactNode}) {
  return <Provider value={client}>{children}</Provider>;
}
