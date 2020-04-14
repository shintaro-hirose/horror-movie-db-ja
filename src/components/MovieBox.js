import React from 'react'
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import noImage from '../images/no-image.png';




export default function MovieBox({movie}) {
    const useStyles = makeStyles(() => ({
        poster: {
            width: "150px",
            height: "210px",
            borderRadius: "10px",
            position: "static"
        },
        chip:{
            position: "absolute",
            top: "190px",
            left: "20px",
            backgroundColor: `rgb(0,${256*movie.vote_average/10},${256-256*movie.vote_average/10})`,
            color: "white"
        },
        title:{
            fontWeight: "bold"
        },
        date:{
            color: "#bdbdbd"
        }
    }));
    
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Box component={Link} to={`/detail/${movie.id}`}>
                    {
                        movie.poster_path ? (
                    <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="poster"
                    className={classes.poster}
                    />
                        ) : (
                            <img 
                            src={noImage}
                            alt="noData"
                            className={classes.poster}
                            />
                        )
                    }
                        <Chip label={movie.vote_average} className={classes.chip}/>
                </Box>
                
                <Box textAlign="left" padding="10px" marginTop="10px">
                    <Typography className={classes.title}>{movie.title}</Typography>
                    <Typography className={classes.date}>{movie.release_date}</Typography>
                </Box>
            </Box>
            
        </div>
    )
}
