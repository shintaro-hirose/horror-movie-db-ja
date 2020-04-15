import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//components
import MovieGridList from '../components/Home/MovieGridList';
import Search from '../components/Home/Search'

import axios from 'axios';

const useStyles = makeStyles(() => ({
    title:{
        fontSize: '24px',
        textAlign: 'left',
        margin: '32px 0 0 24px'
    }
}))

export default function Home() {
    const classes = useStyles();
    const [width, setWidth] = useState(0);
    const [japaneseMovies, setJapaneseMovies] = useState(null); //popularityでソート
    const [recentReleasedMovies, setRecentReleasedMovies] = useState(null); //2020年の映画をpopularityでソート
    const [highVoteAverageMovie, setHighVoteAverageMovie] = useState(null); //5票以上獲得している中で評価が高い順番
    const [movies_1980, setMovies_1980] = useState(null); //1980年の映画をpopularityでソート

    useEffect(() => {
        window.scrollTo(0, 0);
        let data;
        axios.get('https://api.themoviedb.org/3/discover/movie?vote_count.gte=5',{
            params:{
                api_key: process.env.REACT_APP_DEV_API_KEY,
                language: "ja-JA",
                sort_by: "popularity.desc",
                include_video: false,
                page: 1,
                with_genres: 27,
                primary_release_year: 2020
            }
        })
        .then(res => {
            data = res.data.results;
            setRecentReleasedMovies(data);
            return null;
        })
        .then(() => {
            axios.get('https://api.themoviedb.org/3/discover/movie?vote_count.gte=10',{
                params:{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                    language: "ja-JA",
                    sort_by: "vote_average.desc",
                    include_video: false,
                    page: 1,
                    with_genres: 27,
    
                }
            })
            .then(res => {
                data = res.data.results;
                setHighVoteAverageMovie(data);
                return null;
            })
            return null;
        })
        .then(() => {
            axios.get('https://api.themoviedb.org/3/discover/movie?vote_count.gte=5',{
                params:{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                    language: "ja-JA",
                    sort_by: "popularity.desc",
                    include_video: false,
                    page: 1,
                    with_genres: 27,
                    with_original_language: 'ja'
    
                }
            })
            .then(res => {
                let data = res.data.results;
                setJapaneseMovies(data);
                return null;
            })
            return null;
        })
        .then(() => {
            axios.get('https://api.themoviedb.org/3/discover/movie?vote_count.gte=5',{
                params:{
                    api_key: process.env.REACT_APP_DEV_API_KEY,
                    language: "ja-JA",
                    sort_by: "popularity.desc",
                    include_video: false,
                    page: 1,
                    with_genres: 27,
                    year: 1989
    
                }
            })
            .then(res => {
                let data = res.data.results;
                setMovies_1980(data);
                return null;
            })
            return null;
        })
        .catch(err => {
            console.log('err:', err);
            return null;
        })

    },[])

    useEffect(() => {
        setWidth(window.innerWidth)
    },[])



    return (
        <div>
            <Search />
            <Typography className={classes.title}>2020年のホラー映画</Typography>
            <MovieGridList movies={recentReleasedMovies} width={width}/>
            <Typography className={classes.title}>評価の高いホラー映画</Typography>
            <MovieGridList movies={highVoteAverageMovie} width={width}/>
            <Typography className={classes.title}>日本のホラー映画</Typography>
            <MovieGridList movies={japaneseMovies} width={width}/>
            <Typography className={classes.title}>1980年代以前のホラー映画</Typography>
            <MovieGridList movies={movies_1980} width={width}/>
        </div>
    )
}
