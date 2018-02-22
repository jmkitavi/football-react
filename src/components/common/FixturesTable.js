import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const FixturesTable = ({ fixtures }) => {
  return (
    <Table>
      <Table.Body>
        {fixtures.map(fixture => {
          return (
            <Link
              to={{
                pathname: `/fixture/${fixture._links.self.href.substring(fixture._links.self.href.lastIndexOf('/') + 1)}`,
                state: { fixture }
              }}
              style={{ textDecoration: 'none'}}
              >
            <Table.Row>
                <Table.Cell textAlign='center'>{fixture.homeTeamName}</Table.Cell>
                {fixture.result.goalsHomeTeam !== null ? (
                  <Table.Cell textAlign='center'>{fixture.result.goalsHomeTeam}</Table.Cell>
                ):null}
                <Table.Cell textAlign='center'> vs </Table.Cell>
                {fixture.result.goalsAwayTeam !== null ? (
                  <Table.Cell textAlign='center'>{fixture.result.goalsAwayTeam}</Table.Cell>
                ):null}
                <Table.Cell textAlign='center'>{fixture.awayTeamName} </Table.Cell>
              </Table.Row>
          </Link>
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default FixturesTable