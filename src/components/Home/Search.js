import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import searchBackgroundImage from '../../images/child-backdrop-4.png';
import SearchBar from './SearchBar'

const useStyles = makeStyles((theme) => ({
    paper:{
        textAlign: 'left',
        height: "auto",
        padding: "50px 30px 10px 30px",
        backgroundImage: `url(${searchBackgroundImage})`,
        color: "white",
        backgroundSize: 'cover',
    },
    title:{
        fontSize: "3.1vw",
    },
    content:{
        fontSize: "1.6vw",
    },
    inputBox:{
        margin: '40px auto',
        width: '100%',
    }
}))

export default function Search() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>ようこそ、ホラー映画の宝庫へ。</Typography>
                <Typography className={classes.content}>
                </Typography>
                <Box className={classes.inputBox}>
                    <SearchBar />
                </Box>
                

            </Paper>
        </div>
    )
}
