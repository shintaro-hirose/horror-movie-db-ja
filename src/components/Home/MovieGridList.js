import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import MovieBox from './MovieBox'

import loadingImage from '../../images/sheep-2.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '24px',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  loading: {
    width: '120px',
    height: '120px',
  }
}));

export default function MovieGridList({movies, width}) {
  const classes = useStyles();
  const moviesArrayLength = movies ? movies.length : 0;
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6.5*width/1440 >= moviesArrayLength ? moviesArrayLength : 6.5*width/1440} cellHeight='auto'>
            {
                movies ? (
                    movies.map((movie,index) => {
                        return(
                            <GridListTile key={index}>
                                <MovieBox movie={movie} rank={index+1}/>
                            </GridListTile>
                        )
                    })
                ) : (
                    <img
                    src={loadingImage}
                    alt="loading"
                    className={classes.loading}
                    />
                )
            }
      </GridList>
    </div>
  );
}