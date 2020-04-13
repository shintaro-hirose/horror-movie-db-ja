import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import DetailHeader from '../components/DetailHeader';

export default function Detail(props) {
    const movieId = props.match.params.movieId;
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_DEV_API_KEY}&language=ja-JA`)
        .then(res => {
            let data = res.data;
            console.log(data)
            setMovieDetails(data);
            return null;
        })
        .catch(err => {
            console.log('err:', err);
            return null;
        })
    }, [movieId])
    return (
        <div>
            {movieDetails ? (
                <div>
                    <DetailHeader movieDetails={movieDetails}/>
                    <Button component={Link} to="/" variant="outlined">トップに戻る</Button>
                </div>
            ) : (
                <p>loading</p>
            )}
        </div>
    )
}
