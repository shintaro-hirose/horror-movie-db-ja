import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    paper:{
        height: 'auto',
        width: '80%',
        margin: '0 auto',
        textAlign: 'left'
    }
}));

export default function ReviewItem({review}) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography>{review.author}</Typography>
                <Typography>{review.content}</Typography>
            </Paper>
        </div>
    )
}
