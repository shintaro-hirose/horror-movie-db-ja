import React from 'react';
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import noImage from '../../images/no-image.png'

const useStyles = makeStyles((theme) => ({
    paper:{
        maxWidth: '800px',
        textAlign: 'left',
        height: '120px',
        margin: '12px auto',
        backgroundColor: 'rgba(255,255,255,0.8)',
        boxShadow: theme.shadows[5],
        cursor: 'pointer'
        
    },
    poster:{
        width: '80px'
    },
    overview:{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    }
}));


function ResultMovieBox(props) {
    const movie = props.movie;
    const classes = useStyles();
    const handleClick = () => {
        props.history.push(`/detail/${movie.id}`)
    }
    return (
        <div>
            <Card className={classes.paper} onClick={handleClick}>
                <Box display="flex">
                    <Box>
                        <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noImage}
                        alt="poster"
                        className={classes.poster}
                        />

                    </Box>
                    <Box flex={1} padding="0 20px" margin="auto 0">
                        <Typography variant="h6">{movie.title}</Typography>
                        <Typography variant="body2" style={{color: 'grey'}}>{movie.release_date}</Typography>
                        <Typography> <br /> </Typography>
                        <Typography variant="body2" className={classes.overview}>{movie.overview}</Typography>
                    </Box>
                </Box>
            </Card>
        </div>
    )
}

export default withRouter(ResultMovieBox);