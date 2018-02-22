import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Segment, Card, Dimmer, Loader, Grid, Image, Icon, Table, Header, Tab, Menu } from 'semantic-ui-react'

import * as competitionActions from '../actions/competitionActions'
import FixturesTab from './FixturesTab'

let panes

class Competition extends Component {
  componentDidMount() {
    this.props.actions.loadCompetition(this.props.match.params.id)
  }
  render() {
    const competition = this.props.history.location.state.competition
    if (!this.props.history.location.state.competition) {
      return (
        <Segment style={{width: '65%', height: 200, margin: 'auto'}}>
          <Dimmer active inverted>
            <Loader size='huge' content='Loading' />
          </Dimmer>
        </Segment>
      )
    } else {
      return (
        <Segment style={{width: '65%',margin: 'auto'}}>
          <Grid>
            <Grid.Column width={7}>
              <Image style={{ width: '100%'}} src={require(`../../../images/logos/${competition.league}.png`)}/>
              {!this.props.competition.fixtures ? (
                <Segment style={{width: '65%', height: 200, margin: 'auto'}}>
                  <Dimmer active inverted>
                    <Loader size='huge' content='Loading' />
                  </Dimmer>
                </Segment>
              ):(
                <FixturesTab
                  timed={this.props.competition.fixtures.fixtures.filter(fix => fix.status == "TIMED")}
                  scheduled={this.props.competition.fixtures.fixtures.filter(fix => fix.status == "SCHEDULED")}
                  finished={this.props.competition.fixtures.fixtures.filter(fix => fix.status == "FINISHED")}
                />
              )}
            </Grid.Column>
            <Grid.Column width={9}>
              {!this.props.competition.table ? (
                <Segment style={{width: '65%', height: 200, margin: 'auto'}}>
                  <Dimmer active inverted>
                    <Loader size='huge' content='Loading' />
                  </Dimmer>
                </Segment>
              ):(
                <Table basic='very' celled collapsing>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan='9' textAlign='center'>
                        <h2>{this.props.history.location.state.competition.caption}</h2>
                      </Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell  textAlign='center'>Team</Table.HeaderCell>
                      <Table.HeaderCell>P</Table.HeaderCell>
                      <Table.HeaderCell>W</Table.HeaderCell>
                      <Table.HeaderCell>D</Table.HeaderCell>
                      <Table.HeaderCell>L</Table.HeaderCell>
                      <Table.HeaderCell  textAlign='center'>+/-</Table.HeaderCell>
                      <Table.HeaderCell>GD</Table.HeaderCell>
                      <Table.HeaderCell>Pts</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {this.props.competition.table.standing.map(team => {
                      return (
                        <Table.Row>
                          <Table.Cell>{team.position}</Table.Cell>
                          <Table.Cell>
                            <Link to={{
                              pathname: `/team/${team._links.team.href.substring(team._links.team.href.lastIndexOf('/') + 1)}`,
                              state: { team }
                              }}>
                            <Header as='h5' image>
                              <Image style={{ height: '27px'}} src={team.crestURI} rounded size='mini' />
                              <Header.Content>
                                  {team.teamName}
                              </Header.Content>
                            </Header>
                            </Link>
                          </Table.Cell>
                          <Table.Cell>{team.playedGames}</Table.Cell>
                          <Table.Cell>{team.wins}</Table.Cell>
                          <Table.Cell>{team.draws}</Table.Cell>
                          <Table.Cell>{team.losses}</Table.Cell>
                          <Table.Cell textAlign='center' >{team.goals} / {team.goalsAgainst}</Table.Cell>
                          <Table.Cell>{team.goalDifference}</Table.Cell>
                          <Table.Cell>{team.points}</Table.Cell>
                        </Table.Row>
                    )})}
                  </Table.Body>
                </Table>
              )}
            </Grid.Column>
          </Grid>
        </Segment>
      )
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    competition: state.competition
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(competitionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Competition);
