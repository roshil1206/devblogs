import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {grey ,green} from '@material-ui/core/colors'
import AddContent from './AddContent'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    appbar:{
            backgroundColor:grey[200]
    },
    title: {
      flexGrow: 1,
      color:'#2C3335',
      textAlign:'center'
    },
    button:{
        color:green[500]
    }
  }));
  
export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="static"  className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              DevBlogs
            </Typography>
            <AddContent />
          </Toolbar>
        </AppBar>
      </div>
    )
}
