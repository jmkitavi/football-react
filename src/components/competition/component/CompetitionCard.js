import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Image, Button, Divider } from 'semantic-ui-react'

const CompetitionCard = ({ competition }) => {
  return (
    <Card>
      <Image style={{width: '60%', height: '50%', margin: 'auto', background: 'white'}} src={require(`../../../images/logos/${competition.league}.png`)}/>
      <Card.Content>
        <Card.Header>
          <Link to={{
            pathname: `/competition/${competition.id}`,
            state: { competition }
          }}>{competition.caption}</Link>
        </Card.Header>
        <Card.Meta>
          {competition.league}
        </Card.Meta>
        <Divider horizontal />
        <br/>
        <Card.Description>
          <Button.Group style={{margin: 'auto'}}>
            <Button basic color='black'>Fixtures</Button>
            <Button basic color='black'>Teams</Button>
            <Button basic color='black'>Table</Button>
          </Button.Group>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default CompetitionCard