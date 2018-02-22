import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Segment, Card, Dimmer, Loader } from 'semantic-ui-react'

import * as competitionActions from '../actions/competitionActions'
import CompetitionCard from './CompetitionCard'


class CompetitionsPage extends Component {
  componentDidMount() {
    this.props.actions.loadCompetitions()
  }

  render() {
    if (this.props.competitions.length < 1) {
      return (
        <Segment style={{ width: '65%', height: 200, margin: 'auto' }}>
          <Dimmer active inverted>
            <Loader size='huge' content='Loading' />
          </Dimmer>
        </Segment>
      )
    } else {
      return (
        <Segment style={{width: '65%', margin: 'auto'}}>
          <Card.Group itemsPerRow={3}>
            {this.props.competitions.map(competition => {
              return (
                <CompetitionCard competition={competition} key={competition.id}/>
              )
            })}
          </Card.Group>
         </Segment>
      )
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    competitions: state.competitions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(competitionActions, dispatch)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsPage)
