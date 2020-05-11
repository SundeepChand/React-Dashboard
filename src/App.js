import React, { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}))

const App = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Navbar drawerOpen={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Main />
    </div>
  );
}

export default App;
