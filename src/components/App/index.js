import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from '../common/PrivateRoute'
import AsyncLoadComponent from '../common/AsyncLoadComponent'

import NotFound from '../common/NotFound'

import './styles.less'

const AsyncLogin = AsyncLoadComponent(() => import('../Auth/Login'))

const App = () => (
  <div className="app-container">
    <Switch>
      <Route path="/login" component={AsyncLogin} />

      <Route path="/publichome" component={() => <div>Hello</div>} />
      <Route path="/404" render={NotFound} />
      <PrivateRoute path="/privatehome" component={() => <div>PRIVATE HOME</div>} />

      <Route path="/" exact component={() => <Redirect to={{ pathname: '/login' }} />} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default withRouter(App)
