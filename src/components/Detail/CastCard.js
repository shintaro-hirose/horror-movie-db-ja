import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import noImage from '../../images/no-image.png'

const useStyles = makeStyles({
  root: {
    width: '180px',
  },
  media: {
    width: '180px',
    height:'180px'
  },
});

export default function CastCard({item}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={item.profile_path ? (`https://image.tmdb.org/t/p/w500/${item.profile_path}`) : (noImage) }
          title="Profile Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.character}
          </Typography>
        </CardContent>
    </Card>
  );
}