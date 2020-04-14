import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CastCard from './CastCard';
import loadingImage from '../../images/sheep-2.png';


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '24px',
    textAlign: 'left'
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

export default function MovieGridList({cast,width}) {
  const classes = useStyles();
  const castArrayLength = cast ? cast.length : 0;
  return (
    <div>
      
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={castArrayLength <= 5.5*width/1440 ? castArrayLength : 5.5*width/1440} cellHeight='auto'>
              {
                  cast ? (
                    castArrayLength === 0 ? (
                      <small>出演者の情報はありません</small>
                    ) : (
                      cast.slice(0,10).map((item,index) => {
                        return(
                            <GridListTile key={index}>
                                <CastCard item={item}/>
                            </GridListTile>
                        )
                    })
                    )
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
    </div>
  );
}