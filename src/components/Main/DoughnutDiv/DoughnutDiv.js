import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DoughnutChart from './DoughnutChart/DoughnutChart'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto'
  },
}))

const DoughnutDiv = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DoughnutChart />
    </div>
  )
}

export default DoughnutDiv
