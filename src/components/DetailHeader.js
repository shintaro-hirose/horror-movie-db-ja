import React from 'react';
//material-ui
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import noImage from '../images/no-image.png'

export default function DetailHeader({movieDetails}) {
    const useStyles = makeStyles(() => ({
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
        discription:{
            backgroundColor: 'rgba(200,200,200,0.8)',
            margin: '20px',
            padding: '20px',
            textAlign: 'left',
        },
        title:{
            fontSize: '40px',
        },
        overview:{
            fontSize: '16px',
            marginTop: '10px'
        },
        chip:{
            marginRight: '8px',
        },
        rate:{
            display:'inline',
            position: 'relative',
            top: -28,
            left: -55,
            fontWeight: 'bold',
            fontSize: '25px'
        },
        tagline:{
            fontStyle: 'italic',
            color: '#424242',
            marginBottom: '10px'
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
                    <Box flex={3} className={classes.discription}>
                        <Typography className={classes.title}>{movieDetails.title}({movieDetails.release_date.slice(0,4)})</Typography>
                        {
                            movieDetails.genres.map((item,index) => {
                                return(
                                    <Chip label={item.name} key={index} variant="outlined" className={classes.chip}/>
                                )
                            })
                        }
                        <Box margin="16px 0 16px 50px" display="flex" justifyContent="flex-start">
                            <Box margin="0px">
                                <CircularProgress
                                variant="static"
                                value={100*movieDetails.vote_average/10}
                                size={72}
                                thickness={5}
                                />
                                <Typography className={classes.rate}>{movieDetails.vote_average.toFixed(1)}</Typography>
                            </Box>
                            <Box>
                                <Typography style={{display: 'inline', lineHeight: '72px', fontSize: '16px', fontWeight: 'lighter'}}>ユーザースコア</Typography>
                            </Box>
                        </Box>
                        <Typography className={classes.tagline}>{movieDetails.tagline}</Typography>                
                        <Typography style={{fontSize: '24px', fontWeight: 'bold'}}>概要</Typography>                
                        <Typography className={classes.overview}>{movieDetails.overview}</Typography>
                    </Box>


                </Box>
            </Paper>
    )
}
