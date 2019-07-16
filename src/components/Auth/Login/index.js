// NOTE: Login Component uses `React.useState` as an example of how to avoid classes to handle state.
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Header } from 'semantic-ui-react'
import get from 'lodash/get'

import { withApollo } from 'react-apollo'
import { LOGIN_QUERY } from '../graphql/queries'

import CommonContainer from '../../common/CommonContainer'
import LoginForm from './Form'

import { isValidEmail } from '../../../lib/validators'

import './styles.less'

const onSubmit = (props, setError) => async params => {
  const {
    client,
    location,
    history: { push }
  } = props

  if (!isValidEmail(params.email)) return setError('Need a valid email')
  const {
    data: { getUserWithAuth },
    errors
  } = await client.query({ errorPolicy: 'all', query: LOGIN_QUERY, variables: { ...params, email: params.email.toLowerCase() } })

  if (errors) return setError('Your email or password is incorrect. Try again.')

  // Navigate back to previous page if needed to re-auth user
  if (getUserWithAuth) {
    const prevUrl = get(location, 'state.from')
    if (prevUrl) {
      return push(`${prevUrl.pathname}${prevUrl.search}`)
    }

    return push('/privatehome')
  }
}

const Login = props => {
  const [error, setError] = useState('')
  return (
    <div className="login-form">
      <CommonContainer>
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log in to your account
            </Header>
            <LoginForm onSubmit={onSubmit(props, setError)} errors={error} />
          </Grid.Column>
        </Grid>
      </CommonContainer>
    </div>
  )
}

export default withRouter(withApollo(Login))
