import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    box:{
        [theme.breakpoints.down('xs')]: {
            width: '90vw',
            height: 'calc(90vw * 0.5625)',
          },
        [theme.breakpoints.up('sm')]: {
            width: '40vw',
            height: 'calc(40vw * 0.5625)',
          },
        
    },
    video:{
        width: '100%',
        height: '100%',
        
    }
}))
export default function DetailVideo({videoData}) {
    const classes = useStyles();
    const trailer = (!videoData || videoData.length === 0) ? (null) : (videoData.find( ({ type }) => type === 'Trailer' ))
    return (
        <div align="center">
            {
                !trailer ? (
                    <small>動画はありません</small>
                ) : (
                    <Box className={classes.box}>
                        <iframe
                        className={classes.video}
                        title={trailer.name}
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        />
                    </Box>
                    
                )                
            }
        </div>
        )
}
