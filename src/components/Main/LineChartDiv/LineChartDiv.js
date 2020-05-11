import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LineChart from './LineChart/LineChart'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
}))

const LineChartDiv = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <LineChart />
    </div>
  )
}

export default LineChartDiv
