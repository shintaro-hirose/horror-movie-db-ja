import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    paper:{
        backgroundColor: 'rgba(255,255,255,0.6)',
        maxWidth: '800px',
        textAlign: 'left',
        margin: '0 auto',
        padding: '32px'
    }
}))

export default function About() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <Paper className={classes.paper}>
                <Typography variant="h4">このサイトについて<br /> <br /></Typography>
                <Typography variant="body1">このサイトはTMDB(<a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>)のAPIを利用しています。このサイトで表示される映画に関する情報はすべてTMBIが提供したものです。<br /><br /><br /></Typography>
                <Typography variant="h4">留意事項<br /> <br /></Typography>
                <Typography variant="body1">利用者が映画に関する情報や画像、人物に関する情報や画像を使用したことによって発生した損失等に関しては、当サイトの管理者は一切責任を持ちません。<br />また、当サイトは個人が管理しており、事前に予告なしにサービスを停止することがあります。</Typography>
            </Paper>
        </div>
    )
}
