import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import DetailHeader from '../components/Detail/DetailHeader';
import CastGridList from '../components/Detail/CastGridList';
import MovieGridList from '../components/Home/MovieGridList';
import DetailVideo from '../components/Detail/DetailVideo';
import DetailDiscription from '../components/Detail/DetailDiscription';
import Keywords from '../components/Detail/Keywords';

import loadingImage from '../images/sheep-2.png';

const useStyles = makeStyles((theme) => ({
    titleBox:{
        textAlign: "left",
        margin: '80px 0 16px 16px',
      },
      titleText:{
        fontSize: '30px',
      },
      description:{
        [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
      },
      loading: {
        width: '120px',
        height: '120px',
      }
}))

function Detail(props) {
    const classes = useStyles();
    const movieId = props.match.params.movieId;
    const [movieDetails, setMovieDetails] = useState(null);
    const [crew, setCrew] = useState(null);
    const [cast, setCast] = useState(null);
    const [similarMovies, setSimilarMovies] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [keywords, setKeywords] = useState(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_DEV_API_KEY}&language=ja-JP`)
        .then(res => {
            let data = res.data;
            setMovieDetails(data);
            return null;
        })
        .then(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_DEV_API_KEY}`)
            .then(res => {
                let data = res.data;
                setCrew(data.crew);
                setCast(data.cast);
                return null;
            })
            return null;
        })
        .then(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,{
                params :{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                }
            })
            .then(res => {
                let data = res.data.results;
                setVideoData(data);
                return null;
            })
            return null;
        })
        .then(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`,{
                params :{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                    page: 1,
                }
            })
            .then(res => {
                let data = res.data.results;
                setReviews(data);
                return null;
            })
            return null;
        })
        .then(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/keywords`,{
                params :{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                }
            })
            .then(res => {
                let data = res.data.keywords;
                setKeywords(data);
                return null;
            })
            return null;
        })
        .then(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations`,{
                params :{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                    language: "ja-JA",
                    page: 1,

                }
            })
            .then(res => {
                let data = res.data.results;
                setSimilarMovies(data);
                return null;
            })
            return null;
        })
        .catch(err => {
            console.log('err:', err);
            return null;
        })
    }, [movieId])

    useEffect(() => {
        setWidth(window.innerWidth)
    },[])

    return (
        <div>
            {similarMovies ? (
                <div>
                    <DetailHeader movieDetails={movieDetails} crew={crew}/>
                    <div className={classes.description}>
                        <DetailDiscription movieDetails={movieDetails} crew={crew}/>
                    </div>

                    <Box className={classes.titleBox}>
                        <Typography className={classes.titleText}>主な出演者</Typography>
                    </Box>
                    <CastGridList cast={cast} width={width}/>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.titleText}>予告編</Typography>
                    </Box>
                    <DetailVideo videoData={videoData}/>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.titleText}>キーワード</Typography>
                    </Box>
                    <Keywords keywords={keywords}/>
                    <Box className={classes.titleBox}>
                        <Typography className={classes.titleText}>おすすめ作品</Typography>
                    </Box>
                    <MovieGridList movies={similarMovies} width={width}/>
                </div>
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
  
export default Detail;