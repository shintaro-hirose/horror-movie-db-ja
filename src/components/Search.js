import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import searchBackgroundImage from '../images/child-backdrop-4.png'

const useStyles = makeStyles(() => ({
    paper:{
        textAlign: "left",
        padding: "50px",
        backgroundImage: `url(${searchBackgroundImage})`,
        color: "white"
    },
    title:{
        fontSize: "50px",
    },
    content:{
        fontSize: "30px",
    }
}))

export default function Search() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography className={classes.title}>ようこそ、ホラー映画の宝庫へ。</Typography>
                <Typography className={classes.content}>
                    世界中のホラー映画をご用意してございます
                </Typography>
            </Paper>
        </div>
    )
}
