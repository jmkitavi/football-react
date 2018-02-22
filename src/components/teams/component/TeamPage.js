import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Segment, Card, Dimmer, Loader, Image, Grid, List } from 'semantic-ui-react'

import * as teamActions from '../actions/teamActions'
import TeamData from './TeamData'

class TeamPage extends Component {
  componentDidMount() {
    this.props.actions.loadTeam(this.props.match.params.id)
  }

  render() {
    console.log(this)
    return (
      <Segment style={{width: '65%', margin: 'auto'}}>
        <Grid>
          <Grid.Column width={7}>
            <h2>{this.props.history.location.state.team.teamName}</h2>
            <Image style={{ height: '320px'}} src={this.props.history.location.state.team.crestURI} />
          </Grid.Column>
          <Grid.Column width={9}>
            {!this.props.team.players ? (
              <Segment style={{width: '65%', height: 200, margin: 'auto'}}>
                <Dimmer active inverted>
                  <Loader size='huge' content='Loading' />
                </Dimmer>
              </Segment>
            ):(
              <Segment>
                <TeamData
                  scores={this.props.team.fixtures.fixtures.filter(fix => fix.status == "FINISHED")}
                  fixtures={this.props.team.fixtures.fixtures.filter(fix => fix.status != "FINISHED")}
                  players={this.props.team.players}
                />
              </Segment>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    team: state.team
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(teamActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)
