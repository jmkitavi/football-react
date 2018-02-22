import React from 'react'
import { Table, Tab } from 'semantic-ui-react'
import FixturesTable from '../../common/FixturesTable'

const PlayersTable = ({ players }) => {
  return (
    <Table>
      <Table.Body>
        {players.map(player => {
          return (
            <Table.Row>
              <Table.Cell textAlign='center'>{player.name}</Table.Cell>
              <Table.Cell textAlign='center'>{player.position} </Table.Cell>
              <Table.Cell textAlign='center'>{player.jerseyNumber} </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}

const TeamData = ({ scores, fixtures, players }) => {
  const panes = [
    { menuItem: 'Scores', render: () => <FixturesTable fixtures={scores}/>},
    { menuItem: 'Fixtures', render: () => <FixturesTable fixtures={fixtures}/>},
    { menuItem: 'Players', render: () => <PlayersTable players={players}/>}
  ]

  return (
    <Tab panes={panes}/>
  )
}

export default TeamData
