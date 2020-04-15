import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import noImage from '../../images/no-image.png';
//redux
import { connect } from 'react-redux';
import { searchByPeople } from '../../redux/actions/dataActions';


const useStyles = makeStyles({
  root: {
    width: '180px',
  },
  media: {
    width: '180px',
    height:'180px'
  },
});

function CastCard(props) {
  const item = props.item
  const classes = useStyles();
  const handleClick = () => {
    props.searchByPeople(item.id,item.name,props.history);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
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
        </CardActionArea>
    </Card>
  );
}

CastCard.propTypes = {
  searchByPeople: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({
});

export default connect(
    mapStateToProps,
  { searchByPeople }
  )(withRouter(CastCard));