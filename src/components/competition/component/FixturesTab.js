import React from 'react'
import { Tab } from 'semantic-ui-react'
import FixturesTable from '../../common/FixturesTable'

const FixturesTab = ({timed, scheduled, finished}) => {
  const panes = [
    { menuItem: 'Finished', render: () => <FixturesTable fixtures={finished}/> },
    { menuItem: 'Timed', render: () => <FixturesTable fixtures={timed}/> },
    { menuItem: 'Scheduled', render: () => <FixturesTable fixtures={scheduled}/> },
  ]
  return (
    <Tab panes={panes} />
  )
}

export default FixturesTab