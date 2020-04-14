import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import logo from '../../images/horror-movie-logo-3.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'static'
    },
    logo:{
        width:'60%'
    }
  }));

export default function TopNavigation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar >
                    <Box margin="0 auto" component={Link} to="/"> 
                        <img
                        src={logo}
                        alt="logo"
                        className={classes.logo}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
