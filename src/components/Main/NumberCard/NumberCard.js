import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    display: 'flex',
    padding: '13px',
    width: '23%',
    [theme.breakpoints.down('sm')]: {
      width: '47%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    marginBottom: '10px',
    borderRadius: '5px',
    height: '100px',
    paddingTop: '15px',
    boxShadow: '0px 0px 4px 0px rgba(50, 50, 50, 0.5)',
    borderLeft: '3px solid purple'
  },
  iconDiv: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center'
  },
  iconBadge: {
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(120, 0, 180, 0.4)',
    border: '3px solid rgb(120, 0, 180)',
    textAlign: 'center',
    borderRadius: '50%',
    paddingTop: '7px',
  },
  textDiv: {
    width: '60%'
  },
  fullWidth: {
    width: '100%'
  }
}))

const NumberCard = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ fontSize: '32px', paddingTop: '5px' }} className={classes.iconDiv}>
        <div className={classes.iconBadge}>
          {data.icon}
        </div>
      </div>
      <div className={classes.textDiv}>
        <div style={{ fontSize: '30px' }} className={classes.fullWidth}>
          {data.value}
        </div>
        <div className={classes.fullWidth}>
          {data.text}
        </div>
      </div>
    </div>
  )
}

export default NumberCard
