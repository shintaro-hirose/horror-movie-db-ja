import React from 'react';
//material-ui
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function DetailDiscription({movieDetails, crew}) {
    const director = crew ? (crew.find( ({ job }) => job === 'Director' )) : null;
    const novel = crew ? (crew.find( ({ job }) => job === 'Novel' )) : null

    const useStyles = makeStyles((theme) => ({
        discription:{
            margin: '20px',
            padding: '20px',
            textAlign: 'left',
            backgroundColor: 'rgba(200,200,200,0.8)',

        },
        title:{
            fontSize: '25px',
        },
        sub:{
            fontSize: '16px',
        },
        overview:{
            fontSize: '16px',
            marginTop: '10px'
        },
        chip:{
            margin: '12px 8px 0 0',
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
        },
    }));
    const date = movieDetails.release_date.slice(0,4) + '年' + movieDetails.release_date.slice(5,7) + '月' + movieDetails.release_date.slice(8,10)+ '日'

    const classes = useStyles();
    return (
        <div>
                    <Box className={classes.discription}>
                        <Typography className={classes.title}>{movieDetails.title}({movieDetails.release_date.slice(0,4)})</Typography>
                        <Typography className={classes.sub}>{date}({movieDetails.production_countries[0] ? (movieDetails.production_countries[0].iso_3166_1) : ("-")})・{movieDetails.runtime}分</Typography>
                        {
                            movieDetails.genres.map((item,index) => {
                                return(
                                    <Chip label={item.name} key={index} variant="outlined" className={classes.chip}/>
                                )
                            })
                        }
                        <Box margin="16px 0 16px 0" display="flex" justifyContent="flex-start">
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
                                <Typography style={{display: 'inline', lineHeight: '72px', fontSize: '1.2vw', fontWeight: 'lighter'}}>TMDBユーザースコア</Typography>
                            </Box>
                        </Box>
                        <Typography className={classes.tagline}>{movieDetails.tagline}</Typography>                
                        <Typography style={{fontSize: '24px', fontWeight: 'bold'}}>概要</Typography>
                        {
                            movieDetails.overview ? (
                            <Typography className={classes.overview}>{movieDetails.overview}</Typography>
                            ) : (
                                <Typography className={classes.overview}>日本語の説明はありません</Typography>
                            )
                        }
                        
                            {crew ? (
                                <Box display="flex" flexDirection="row" p={1} m={1}>
                                    {
                                        director ? (
                                    <Box marginTop="24px">
                                        <Typography style={{fontWeight: 'bold'}}>{director.name}</Typography>
                                        <Typography style={{fontWeight: 'lighter'}}>監督</Typography>
                                    </Box>
                                        ) : (
                                            <p></p>
                                        )
                                    }
                                    {
                                        novel ? (
                                    <Box margin="24px 0 0 24px">
                                        <Typography style={{fontWeight: 'bold'}}>{novel.name}</Typography>
                                        <Typography style={{fontWeight: 'lighter'}}>原作</Typography>
                                    </Box>
                                        ) : (
                                            <p></p>
                                        )
                                    }
                                </Box>
                                
                            ) : (
                                <p></p>
                            )}
                            
                       
                        
                    </Box>
                    </div>
    )
}
