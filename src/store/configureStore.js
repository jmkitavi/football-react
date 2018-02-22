import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { competitionsReducer, competitionReducer } from '../components/competition/reducers/competitionReducer'
import { teamReducer } from '../components/teams/reducers/teamReducer'
import { fixtureReducer } from '../components/fixture/reducers/fixtureReducer'

const rootReducer =  combineReducers({
  competitions: competitionsReducer,
  competition: competitionReducer,
  team: teamReducer,
  fixture: fixtureReducer
})

export default function configureStore() {
  return createStore(
    rootReducer,
    composeWithDevTools(
    applyMiddleware(thunk)
  ));
}
