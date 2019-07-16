// NOTE: Use this whenever you need to use a route that requires authentication.
import React from 'react'

import { Query } from 'react-apollo'

import { Route, Redirect } from 'react-router-dom'

import { Dimmer, Loader } from 'semantic-ui-react'

import { VERIFY_AUTH_QUERY } from '../../Auth/graphql/queries'

class PrivateRoute extends React.Component {
  verifyAccess = props => {
    const { component: Component } = this.props
    return (
      <Query query={VERIFY_AUTH_QUERY}>
        {({ loading, data: { getUserAuthVerification } }) => {
          if (loading) {
            return (
              <Dimmer active inverted>
                <Loader size="massive">Loading</Loader>
              </Dimmer>
            )
          }
          if (getUserAuthVerification.isLoggedIn) {
            return <Component {...props} />
          }
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }}
      </Query>
    )
  }

  render() {
    const { component: Component, ...rest } = this.props
    return <Route {...rest} render={this.verifyAccess} />
  }
}

export default PrivateRoute
