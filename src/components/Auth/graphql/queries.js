import gql from 'graphql-tag'

export const LOGIN_QUERY = gql`
  query getUserWithAuth($email: String!, $password: String!) {
    getUserWithAuth(email: $email, password: $password) {
      id
      email
      firstName
      lastName
    }
  }
`

export const VERIFY_AUTH_QUERY = gql`
  query getUserAuthVerification {
    getUserAuthVerification {
      isLoggedIn
    }
  }
`
