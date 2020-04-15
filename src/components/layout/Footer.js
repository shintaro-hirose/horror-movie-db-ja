import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    root:{
        backgroundColor: '#03210E',
        fontSize: '15px',
        padding: '30px 0 50px 0',
        color: 'white',
    },
    link:{
        color: 'white',
        marginTop: '30px',
        textDecoration: 'none'
    }
}))
export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>© 2020 ホラー映画DB</Typography>
            <Button component={Link} to='/about' className={classes.link}>このサイトについて</Button>
        </div>
    )
}
