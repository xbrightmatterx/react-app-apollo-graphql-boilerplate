import fetch from 'isomorphic-fetch'

import React from 'react'
import { render } from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'

import config from './config'

import App from './components/App'

import './styling/globalStyles.less'
import './styling/semantic.less'

const client = new ApolloClient({
  link: ApolloLink.from([
    new HttpLink({
      uri: `${config.apiRoot}/graphql`,
      credentials: 'include',
      fetch
    })
  ]),
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('app')
)
