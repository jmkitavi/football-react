import React from 'react'
import { Route, Switch } from 'react-router'
import App from './components/App'
import CompetitionsPage from './components/competition/component/CompetitionsPage'
import Competition from './components/competition/component/Competition'
import TeamPage from './components/teams/component/TeamPage'
import FixturePage from './components/fixture/component/FixturePage'
import NotFoundPage from './components/404/NotFound'

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={CompetitionsPage} />
      <Route exact path="/competition/:id" component={Competition} />
      <Route exact path="/team/:id" component={TeamPage} />
      <Route exact path="/fixture/:id" component={FixturePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </App>
)

export default Routes;