import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import MovieBox from './MovieBox'

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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  }
}));

export default function MovieGridList({movies, width}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6.5*width/1440} cellHeight='auto'>
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
                    <p>loading</p>
                )
            }
      </GridList>
    </div>
  );
}