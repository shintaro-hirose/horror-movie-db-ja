import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResultMovieBox from '../components/SearchResult/ResultMovieBox';
import axios from 'axios';
import loadingImage from '../images/sheep-2.png';

const useStyles = makeStyles(() => ({
    loading: {
        width: '120px',
        height: '120px',
      }
}))

export default function SearchResult(props) {
    const classes = useStyles();
    const keyword = props.match.params.keyword;
    const [results, setResults] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://api.themoviedb.org/3/search/movie/`,{
            params: {
                api_key: process.env.REACT_APP_DEV_API_KEY,
                language: "ja-JA",
                query: keyword,
                include_adult: true,
                page: 1,
            }
        })
        .then(res => {
            let data = res.data.results;
            setResults(data);
            console.log(data);
            return null;
        })
        .catch(err => {
            console.log('err:', err);
            return null;
        })
    },[])
    return (
        <div>
            {results ? (
                results.length === 0 ? (
                    <p>no results</p>
                ) : (
                    results.map((item) => {
                        return(
                            <ResultMovieBox result={item}/>
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
