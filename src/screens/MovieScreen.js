
import './MovieScreen.css';
import axios from "axios";
import {useEffect, useState} from "react";
import moment from "moment";


function MovieScreen() {
    const [movie, setMovie] = useState([]);

    const getShowData = () => {
        axios.get("https://api.themoviedb.org/3/movie/634649?api_key=5855e9b9f4ec1fd91373dae25331f786&language=en-US")
            .then( (response)=> {
                // handle success

                console.log(response.data);
                setMovie(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    const convertMinutesToHours = (minutes) => {
        let hours = Math.floor(minutes / 60);
        let minutesLeft = minutes % 60;
        return `${hours}h ${minutesLeft}m`;
    }

    useEffect(() => {
        getShowData();
    }, []);


    return (
        <div className="movie-container">
            <div className="movie-details">
                <div className="left-container">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image" className="movie-poster"/>
                </div>
                <div className="right-container">
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-description">{movie.overview}</p>
                    <h2 className="release-date">{moment(movie.release_date).format("MMM Do YY")}</h2>
                    <h2 className="movie-runtime">{convertMinutesToHours(movie.runtime)} long</h2>
                </div>


            </div>
        </div>
    );
}

export default MovieScreen;
