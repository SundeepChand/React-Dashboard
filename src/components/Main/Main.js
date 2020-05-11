import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import NumberCard from './NumberCard/NumberCard'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BarChartIcon from '@material-ui/icons/BarChart'
import VisibilityIcon from '@material-ui/icons/Visibility'
import DoughnutDiv from './DoughnutDiv/DoughnutDiv'
import LineChartDiv from './LineChartDiv/LineChartDiv'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  displayFlex: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  chartContainerSmall: {
    width: '30%',
  },
  chartContainerMedium: {
    width: '50%',
  },
  chartContainerLarge: {
    width: '70%',
  },
  chartContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }
}))

const initialTopFourData = [
  {
    id: 1,
    icon: <AttachMoneyIcon />,
    text: 'Total Revenue',
    value: 0,
    color: 'blue',
  },
  {
    id: 2,
    icon: <ShoppingCartIcon />,
    text: 'Today\'s Sales',
    value: 0,
    color: 'purple',
  },
  {
    id: 3,
    icon: <BarChartIcon />,
    text: 'conversion',
    value: 0,
    color: 'blue',
  },
  {
    id: 4,
    icon: <VisibilityIcon />,
    text: 'Today\'s Visits',
    value: 0,
    color: 'purple',
  }
]

const Main = () => {
  const classes = useStyles()

  const [data, setData] = useState(null)
  const [topFourData, setTopFourData] = useState(initialTopFourData)

  useEffect(() => {
    axios
      .get('https://wygtwu2p2j.execute-api.ap-south-1.amazonaws.com/test')
      .then(response => {
        const responseData = response.data
        console.log(responseData)
        setData(responseData)
        const newTopFourData = [...topFourData]
        newTopFourData[0].value = responseData.dataForTopFourBoxes.totalRevenue
        newTopFourData[1].value = responseData.dataForTopFourBoxes.todaysSales
        newTopFourData[2].value = responseData.dataForTopFourBoxes.conversion
        newTopFourData[3].value = responseData.dataForTopFourBoxes.todaysVisits
        setTopFourData(newTopFourData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          <div>
            <Typography variant="h5" component="h5">
              Dashboard
            </Typography>
            <Typography paragraph color="secondary">
              Welcome to Elecbits admin panel!
            </Typography>
          </div>

          <div className={classes.displayFlex}>
            {topFourData.map(item => (
              <NumberCard key={item.id} data={item} />
            ))}
          </div>

          <div className={classes.displayFlex}>
            <Typography paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </Typography>
            <div className={`${classes.chartContainerSmall} ${classes.chartContainer}`}>
              <DoughnutDiv />
            </div>

            <div className={`${classes.chartContainerLarge} ${classes.chartContainer}`}>
              <LineChartDiv />
            </div>
          </div>
      </main>
    </div>
  )
}

export default Main
