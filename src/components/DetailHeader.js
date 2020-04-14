import React from 'react';
//material-ui
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import DetailDiscription from './DetailDiscription'

import noImage from '../images/no-image.png'

export default function DetailHeader({movieDetails, crew}) {

    const useStyles = makeStyles((theme) => ({
        paper:{
            width:'100%',
            height: 'auto',
            backgroundColor: "grey",
            backgroundSize: 'cover' , 
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
        },
        poster:{
            width: '100%'
        },
        disctiption:{
            [theme.breakpoints.down('xs')]: {
                display: 'none',
              },
        },
        blank:{
            [theme.breakpoints.up('sm')]: {
                display: 'none'
              },
        }
    }));

    const classes = useStyles();
    return (
            <Paper className={classes.paper}>
                <Box display="flex">
                    <Box flex={1} margin="20px">
                        {
                            movieDetails.poster_path ? (
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                        alt="poster"
                        className={classes.poster}
                        />
                            ) : (
                        <img 
                        src={noImage}
                        alt="poster"
                        className={classes.poster}
                        />
                            )
                        }
                        
                    </Box>
                    <Box flex={3}>
                        <div className={classes.disctiption}>
                            <DetailDiscription movieDetails={movieDetails} crew={crew}/>
                        </div>
                        <div className={classes.blank}>
                            <Box></Box>
                        </div>
                    </Box>


                </Box>
            </Paper>
    )
}
