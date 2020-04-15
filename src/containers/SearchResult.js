import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ResultMovieBox from '../components/SearchResult/ResultMovieBox';
import SearchBar from '../components/Home/SearchBar';
import loadingImage from '../images/sheep-2.png';
//redux
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    loading: {
        width: '120px',
        height: '120px',
      },
      searchBox:{
          maxWidth: '800px',
          margin: '32px auto',
          textAlign: 'left',
      }
}))

function SearchResult(props) {
    const classes = useStyles();
    const { UI:{loading, errors}, data:{searchResultMovies,searchResultType,searchResultWord} } = props;
    const word = searchResultType === "word" ? "の検索結果" :
        searchResultType === "keyword" ? "によるキーワード検索結果" :
            searchResultType === "people" ? "の出演作品" : "";

    return (
        <div>
            <Typography variant="h5">{searchResultWord} {word}</Typography>
            <div className={classes.searchBox}>
                <SearchBar />
            </div>
            {!loading && searchResultMovies ? (
                searchResultMovies.length === 0 ? (
                    <p>no results</p>
                ) : (
                    searchResultMovies.map((item,index) => {
                        return(
                            <ResultMovieBox movie={item} key={index}/>
                        )
                    })
                    
                )
            ) : (
                <img
                    src={loadingImage}
                    alt="loading"
                    className={classes.loading}
                />
            )}
        </div>
    )
}

SearchResult.propTypes = {
    data: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
  };
  
const mapStateToProps = (state) => ({
    data: state.data,
    UI: state.UI,
  });
  
export default connect(
      mapStateToProps
    )(withRouter(SearchResult));