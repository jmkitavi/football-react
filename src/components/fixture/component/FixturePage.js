import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Segment, Dimmer, Loader, Grid, Image } from 'semantic-ui-react'


import * as fixtureActions from '../actions/fixtureActions'
import FixturesTable from '../../common/FixturesTable'

class FixturePage extends Component {
  componentDidMount() {
    this.props.actions.loadFixture(this.props.match.params.id)
  }

  render() {
    console.log('fix', this.props.location.state.fixture)
    return (
      <Segment style={{width: '65%', margin: 'auto'}}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={7} textAlign='center'>
              <h2>{this.props.fixture.homeTeamName ? this.props.fixture.homeTeamName : this.props.location.state.fixture.homeTeamName}</h2>
              {this.props.fixture.homeTeamName}
            </Grid.Column>
            <Grid.Column width={7} textAlign='center'>
              <h2>{this.props.fixture.awayTeamName ? this.props.fixture.awayTeamName : this.props.location.state.fixture.awayTeamName}</h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {!this.props.fixture.head2head ? (
              <Segment></Segment>
            ):(
              <Segment>
                Head2Head: Win {this.props.fixture.head2head.homeTeamWins} Draw {this.props.fixture.head2head.draws} Loss {this.props.fixture.head2head.awayTeamWins}
                <FixturesTable fixtures={this.props.fixture.head2head.fixtures} />
              </Segment>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    fixture: state.fixture
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fixtureActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FixturePage)
