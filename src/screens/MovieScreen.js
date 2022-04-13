
import './MovieScreen.css';
import axios from "axios";
import {useEffect, useState} from "react";


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

    useEffect(() => {
        getShowData();
    }, []);


    return (
        <div className="movie-container">
            <div className="movie-details">
                <div className="left-container">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="image" className="movie-poster"/>
                </div>
                <div className="right-container">
                    <h1 className="movie-title">{movie.title}</h1>
                    <p className="movie-description">{movie.overview}</p>
                    <h2 className="release-date">{movie.release_date}</h2>
                </div>


            </div>
        </div>
    );
}

export default MovieScreen;
