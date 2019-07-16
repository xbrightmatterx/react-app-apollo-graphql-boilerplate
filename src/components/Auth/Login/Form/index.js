import React, { useState } from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'

const LoginForm = ({ errors, onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Form error size="large" onSubmit={async () => onSubmit({ email, password })}>
      <Form.Field>
        <Form.Input placeholder="Enter your email" value={email} onChange={(e, { value }) => setEmail(value)} />
      </Form.Field>
      <Form.Field>
        <Form.Input type="password" value={password} placeholder="Enter your password" onChange={(e, { value }) => setPassword(value)} />
      </Form.Field>
      {errors && <Message error content={errors} />}
      <Button color="teal" fluid size="large">
        Log In
      </Button>
    </Form>
  )
}

export default LoginForm
